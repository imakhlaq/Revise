import giraffe, { add as calc, mul, div } from "./add.js";
import * as obj from "./add.js";

function rand() {
  console.log(calc(10, 20));
}

rand();

console.log(giraffe(10, 40));
console.log(calc(20, 30));
