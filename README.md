
# Dynamic Background

a little javascript project to generate gradient color based on a picture to put it as a background for a good page look :3

## Color Reference

| source             | methode                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Url | getGradientFromUrl() |
| Id | getGradientFromId() |
| Element in general | getGradientFromElement() |

## Parameters:
- [CRUTIAL] depending on each of the function above, you can either pass an id, url or element
- [OPTIONAL] direction: it's "to bottom" by default, you can change it to something like "87deg" or whatever you want
- [OPTIONAL] width: by default it's the picture's width, but you can change it in pixels, like "1280" for example
- [OPTIONAL] height: by default it's the picture's height, but you can change it in pixels, like "720" for example

## Demo

https://NacreousDawn596.github.io/dynamic-background/

or

https://NacreousDawn596.github.io/dynamic-background/example.html
## Documentation

### you can just import some of the following functions like:
 ```html
    <script type="module">
        import { getGradientFromUrl, getGradientFromId, getGradientFromElement } from "https://cdn.jsdelivr.net/gh/NacreousDawn596/dynamic-background@master/main.js";
    </script>
```


## Usage/Examples

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usage</title>
    <style>
        html,
        body {
            width: 100vw;
            height: 100vh;
            margin: 0;
            display: grid;
            place-items: center;
        }

        div {
            height: min(70vh, 70vw);
            width: min(90vh, 90vh);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>

<body>
    <div>
        <img src="https://cdn.jsdelivr.net/gh/NacreousDawn596/dynamic-background@master/rose-pine-bg%402x.png" />
    </div>
    <script type="module">
        import { getGradientFromElement } from "https://cdn.jsdelivr.net/gh/NacreousDawn596/dynamic-background@master/main.js";
        const element = document.getElementsByTagName("img")[0];
        const gradient = await getGradientFromElement(element);
        console.log(gradient);
        document.body.style.background = gradient;
    </script>
</body>

</html>
```
using this picture of rose pine:
![](https://github.com/NacreousDawn596/dynamic-background/raw/master/rose-pine-bg%402x.png)

# Feel free to create pull requests and issues if any are found!!