const Https = require("https");
const fs = require("fs");
const path = require("path");
const converter = require('lottie-converter');
const tgslottie = require('tgs2lottie');

const cacheFolder = path.join(path.dirname(require.main.filename), 'cache', 'tgs_converter');

module.exports.downloadFile = function (url) {
    return new Promise((resolve) => {
        if (url.indexOf('.tgs') === -1) {
            return resolve(undefined);
        }
        Https.get(url, response => {
            const code = response.statusCode ?? 0

            if (code >= 400) {
                return resolve(undefined)
            }

            // handle redirects
            if (code > 300 && code < 400 && !!response.headers.location) {
                return resolve(
                    module.exports.downloadFile(response.headers.location)
                )
            }

            // save the file.js to disk
            checkCacheFolder();
            let fileName = url.split('/')[url.split('/').length - 1];
            const targetFile = path.join(cacheFolder, fileName);
            const fileWriter = fs
                .createWriteStream(targetFile)
                .on('finish', () => {
                    resolve(targetFile)
                })
            response.pipe(fileWriter)
        }).on('error', error => {
            resolve(undefined)
        })
    })
}

module.exports.removeFile = function (filePath) {
    fs.rmSync(filePath);
}

module.exports.tgs2json = function (tgsFile) {
    const read = fs.readFileSync(tgsFile);
    let fileName = path.basename(tgsFile).split('.')[0];
    let jsonFile = path.join(path.dirname(tgsFile), fileName) + '.json';
    fs.writeFileSync(jsonFile, tgslottie.convert(read), 'utf-8');
    return jsonFile;
}

module.exports.writeFile = function (buffer) {
    const fileName = path.join(cacheFolder, `${new Date().getTime()}.tgs`);
    fs.writeFileSync(fileName, buffer);
    return fileName;
}

module.exports.file2Buffer = function (file) {
    return fs.readFileSync(file);
}

module.exports.json2gif = function (jsonFile, config) {
    return new Promise(async (resolve) => {
        let converted = await converter({
            file: fs.readFileSync(jsonFile),
            ...config
        });

        let fileName = path.basename(jsonFile).split('.')[0];
        let gifFile = path.join(path.dirname(jsonFile), fileName) + '.' + config.format;

        fs.writeFileSync(gifFile, converted, 'base64');
        resolve(gifFile);
    })
}

module.exports.getFileName = function (file) {
    return path.basename(file);
}

module.exports.move = function (file, folder) {
    let fileName = path.basename(file);
    let newFile = path.join(folder, fileName);

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, {recursive: true});
    }

    fs.renameSync(file, newFile);
    return newFile;
}

function checkCacheFolder() {
    if (fs.existsSync(cacheFolder)) {
    } else {
        fs.mkdirSync(cacheFolder, {recursive: true});
    }
}