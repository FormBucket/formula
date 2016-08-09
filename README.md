# functionfoundry

[![Circle CI](https://circleci.com/gh/FunctionFoundry/functionfoundry.svg?style=svg)](https://circleci.com/gh/FunctionFoundry)

FunctionFoundry is a JavaScript library with an interface similar to the classic spreadsheet functions.

The code runs in Node.js and browsers. The library provides ~100 functions but it is small (~30kb minified).

## quickstart

```sh
npm install --save functionfoundry
```

```js
var { and, eq, len, gt, lt, isnumber, isText, isEmail, isEmpty, lower, proper, text, date} = require('functionfoundry')
// print `true`
console.log(
  and(
    isnumber(1),
    isText('this is'),
    isEmail('me@gmail.com'),
    isEmpty(''),
    gt(2, 1),
    lt(1, 2),
    eq(len('foo'), 3),
    eq(lower('HAPPY'), 'happy'),
    eq(proper('happy'), 'Happy'),
    eq(text(4200.00, "$#,###.00"), '$4,200.00'),
    eq(text(date(2000, 2, 1), "m-d-yyyy"), '2-1-2000')
  )
)
```

## naming conventions

All function names are lowercase by default. Select functions include camelCase aliases.

## organization

| name | purpose |
| ------------- | ----------- |
|dist| Browser ready files |
|doc| Annotated source code generated by groc |
|lib| Rolled up source code for Node.js or browserify/Webpack  |
|scripts| Developer tools |
|src| Original source code |
|test| Unit test code |
