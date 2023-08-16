# About The Package

Converter from file/buffer stickers Telegram to gif/mp4/webp

# Uses

From buffer:

```js
   let result = await tgsConverter.buffer2gif(buffer, {
    lottie_config: {
        format: 'gif'
    },
    exportPath: '/var/www/example.com/public_html/storage'
});
```

Example 2 from url:

```js
    let result2 = await tgsConverter.url2Gif(
    'https://leadsender.ru/storage/telegram/d3620f583dea05b313c473491c45ffca.tgs',
    {
        lottie_config: {
            format: 'gif'
        },
        exportPath: '/var/www/example.com/public_html/storage'
    });
```

# Result

```js
{
  file: 'C:\\Users\\Maxim\\WebstormProjects\\untitled\\cache\\tgs_converter\\d3620f583dea05b313c473491c45ffca.gif',
  fileName: 'd3620f583dea05b313c473491c45ffca.gif'
}
```