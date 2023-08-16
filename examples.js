const tgsConverter = require('./tgs_converter');

(async () => {
    console.log('started');
    console.log('');

    let time = new Date().getTime();

    let result = await tgsConverter.getGif(
        'https://leadsender.ru/storage/telegram/d3620f583dea05b313c473491c45ffca.tgs',
        {
            lottie_config: {
                format: 'gif'
            },
            exportPath: '/home/maxim/Изображения'
        });

    console.log(`Работа заняла ${new Date().getTime() - time} мс`)
    console.log('result:', result);

    console.log('');
    console.log('done!');
})();