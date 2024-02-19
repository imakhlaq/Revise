// arrow func
const arr = () => {};

//
const arr1 = () => 3;

//
const arr2 = (num) => num * 4;

const arr3 = (num, num2) => num * 4;

// output

const arr4 = (num) => (num) => (num) => num * 8;

console.log(arr4());
console.log(arr4()());
console.log(arr4()()());
