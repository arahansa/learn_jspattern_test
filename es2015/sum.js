/**
 * Created by jarvis on 2017. 1. 5..
 */
require('source-map-support').install();
/* function */
const sum       = (a, b) => a + b;
console.log(sum(3,4));
throw new Error('Example Error');