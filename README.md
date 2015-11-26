# posthtml-prefix-class

[![Build Status](https://travis-ci.org/stevenbenisek/posthtml-prefix-class.svg)](https://travis-ci.org/stevenbenisek/posthtml-prefix-class)

[PostHTML](https://github.com/posthtml/posthtml) plugin to prefix class names.

## Installation

```shell
npm install --save-dev posthtml-prefix-class
```

## Usage

```js
var posthtml = require('posthtml');
var posthtmlPrefixClass = require('posthtml-prefix-class');

posthtml()
    .use(posthtmlPrefixClass({
        prefix: 'prefix-',
        ignore: ['selector-2']
    }))
    .process(
        '<div class="selector-1"><div class="selector-2"></div></div>'
    )
    .then(function (output) {
        console.log(output.html);
        // <div class="prefix-selector-1"><div class="selector-2"></div></div>
    });
```

## Options

### `prefix`

Type: `String`  
Default: `''`

The string used to prefix class names.

### `ignore`

Type: `Array|String`  
Default: `[]`

A class name, or an array of class names, to be excluded from prefixing.
**Accepts any glob expression supported by [minimatch](https://github.com/isaacs/minimatch).**

```js
var posthtml = require('posthtml');
var posthtmlPrefixClass = require('posthtml-prefix-class');

posthtml()
    .use(posthtmlPrefixClass({
        prefix: 'prefix-',
        ignore: ['selector-*']
    }))
    .process(
        '<div class="selector-1"><div class="selector-2"></div></div>'
    )
    .then(function (output) {
        console.log(output.html);
        // <div class="selector-1"><div class="selector-2"></div></div>
    });
```

## Testing

```shell
npm test
```
