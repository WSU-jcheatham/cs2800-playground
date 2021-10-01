import { outer } from "./script.js";
import { rand, updateVal, val } from "./script.js";

let f = outer();
f("from outside");
rand("a value");

console.log("val: " + val);
updateVal();
console.log("val: " + val);


