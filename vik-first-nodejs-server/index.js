const products = require('./products');
const path = require('path');
const _ = require('underscore');

console.log("__dirname:", __dirname);

console.log("__filename:", __filename);

console.log(products.id);

console.log(products.fn());

let res = path.parse(__filename);
console.log("res.ext::: ", res.ext);

//Use with underscore
let result = _.contains([10, 20, 30], 25);
console.log("result", result);