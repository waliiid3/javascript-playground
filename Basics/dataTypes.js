"use strict";  //This will treat all js code as newer version
/*
This will give us an error because we are running the code with Node.js.
The `alert()` function is provided by web browsers and is not available
in the Node.js runtime.

If we run the same code in the browser's developer console, it will work
because the browser provides the `alert()` function.
*/

//alert(3+3) 

console.log("We are doing this !")
console.log(6+6)

//DataTypes : string, numbers, bigInt , boolean , undefined , symbol(unique) , null-->Standalone value

console.log(typeof undefined) //undefined
console.log(typeof null) //object