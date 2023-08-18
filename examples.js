const tgs2 = require('./index');

const file = require('./src/file');

(async () => {
    console.log('started');
    console.log('');

    let time = new Date().getTime();


    let buffer = file.file2Buffer('C:\\NodeJS\\tgs2\\examples\\1.tgs');

    let result = await tgs2.buffer2gif(buffer, {
        lottie_config: {
            format: 'gif'
        },
        fileName: 'output.gif',
        // exportPath: '/home/maxim/Изображения'
    });

    // let result = await tgs2.file2gif('C:\\NodeJS\\tgs2\\cache\\tgs_converter\\example1.tgs', {
    //     lottie_config: {
    //         format: 'gif'
    //     },
    //     fileName: 'lol.gif'
    //     // exportPath: '/var/www/example.com/public_html/storage'
    // });

    //
    // let result = await tgs2.url2Gif(
    //     'https://leadsender.ru/storage/telegram/d3620f583dea05b313c473491c45ffca.tgs',
    //     {
    //         lottie_config: {
    //             format: 'gif'
    //         },
    //         exportPath: '/home/maxim/Изображения'
    //     });
    //
    console.log(`Работа заняла ${new Date().getTime() - time} мс`)
    console.log('result:');
    console.log(result);

    console.log('');
    console.log('done!');
})();