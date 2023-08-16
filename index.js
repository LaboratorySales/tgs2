const file = require('./src/file.js');

module.exports.url2Gif = function (url, config) {
    return new Promise(async (resolve) => {
        let fileTGS = undefined;
        let jsonFile = undefined;
        let gifFile = undefined;

        let default_lottie_config = {
            format: 'gif',// format to convert to, either 'gif' , 'mp4' , 'webp' , 'webm' or 'lottie'
            width: 100,//optional, defaults to 1000
            height: 100 //optinal, defaults to 1000
        }

        if (config) {
            if (config.lottie_config) {
                if (config.lottie_config.format)
                    default_lottie_config.format = config.lottie_config.format;
                if (config.lottie_config.width)
                    default_lottie_config.width = config.lottie_config.width;
                if (config.lottie_config.height)
                    default_lottie_config.height = config.lottie_config.height;
            }
        }

        if (!url) {
            return resolve(undefined);
        }

        fileTGS = await file.downloadFile(url);

        if (fileTGS) {
            jsonFile = file.tgs2json(fileTGS);
            // file.removeFile(fileTGS);
        } else {
            return resolve(undefined);
        }

        if (jsonFile) {
            gifFile = await file.json2gif(jsonFile, default_lottie_config);
            // file.removeFile(jsonFile);
        }
        if (gifFile) {
            if (config.exportPath) {
                let movingFile = file.move(gifFile, config.exportPath);
                return resolve(movingFile);
            } else {
                resolve(gifFile);
            }
        } else {
            resolve(undefined);
        }
    })
}

module.exports.buffer2gif = function (buffer, config) {
    return new Promise(async (resolve) => {
        if (!buffer) {
            return resolve(undefined);
        }

        let fileTGS;
        let jsonFile;
        let gifFile;

        let default_lottie_config = {
            format: 'gif',// format to convert to, either 'gif' , 'mp4' , 'webp' , 'webm' or 'lottie'
            width: 100,//optional, defaults to 1000
            height: 100 //optinal, defaults to 1000
        }

        if (config) {
            if (config.lottie_config) {
                if (config.lottie_config.format)
                    default_lottie_config.format = config.lottie_config.format;
                if (config.lottie_config.width)
                    default_lottie_config.width = config.lottie_config.width;
                if (config.lottie_config.height)
                    default_lottie_config.height = config.lottie_config.height;
            }
        }

        fileTGS = file.writeFile(buffer);

        if (fileTGS) {
            jsonFile = file.tgs2json(fileTGS);
            file.removeFile(fileTGS);
        } else {
            return resolve(undefined);
        }

        if (jsonFile) {
            gifFile = await file.json2gif(jsonFile, default_lottie_config);
            file.removeFile(jsonFile);
        }
        if (gifFile) {
            if (config.exportPath) {
                let movingFile = file.move(gifFile, config.exportPath);
                return resolve({
                    file: movingFile,
                    fileName: file.getFileName(movingFile)
                });
            } else {
                resolve(gifFile);
            }
        } else {
            resolve(undefined);
        }
    })
}