# About The Package

Converter from file/buffer stickers Telegram to gif/mp4/webp

# Uses

Example 1 from buffer:

```js
const tgs2 = require('tgs2');

let result = await tgs2.buffer2gif(buffer, {
        lottie_config: {
            format: 'gif'
        },
        fileName: 'output.gif',
        exportPath: '/var/www/example.com/public_html/storage'
    }
);
```

Example 2 from url:

```js
const tgs2 = require('tgs2');

let result2 = await tgs2.url2Gif(
    'https://leadsender.ru/storage/telegram/d3620f583dea05b313c473491c45ffca.tgs',
    {
        lottie_config: {
            format: 'gif'
        },
        exportPath: '/var/www/example.com/public_html/storage'
    }
);
```

Example 3 from file:

```js
const tgs2 = require('tgs2');

let result2 = await tgs2.file2gif(
    'C:\NodeJS\tgs2\cache\tgs_converter\example1.tgs',
    {
        lottie_config: {
            format: 'gif'
        }, 
        exportPath: '/var/www/example.com/public_html/storage'
    }
);
```

# Config
```js
{
    lottie_config: {
        format: 'gif', //format to convert to, either 'gif' , 'mp4' , 'webp' , 'webm' or 'lottie'
        width: 500, //optional, defaults to 1000
        height: 500 //optional, defaults to 1000
    },
    exportPath: '/var/www/example.com/public_html/storage'
}
```

# Result

```js
{
  file: 'C:\\Users\\Maxim\\WebstormProjects\\untitled\\cache\\tgs_converter\\d3620f583dea05b313c473491c45ffca.gif',
  fileName: 'd3620f583dea05b313c473491c45ffca.gif'
}
```