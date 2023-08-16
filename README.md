# tgs2

Example 1:

```
   let result = await tgsConverter.buffer2gif(buffer, {
        lottie_config: {
            format: 'gif'
        },
        exportPath: '/var/www/example.com/public_html/storage'
    });
```

Example 2:

```
    let result2 = await tgsConverter.url2Gif(
        'https://leadsender.ru/storage/telegram/d3620f583dea05b313c473491c45ffca.tgs',
        {
            lottie_config: {
                format: 'gif'
        },
        exportPath: '/var/www/example.com/public_html/storage'
    });
```