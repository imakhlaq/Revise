//arrays

//1
const arr = [1, 2];

//2
const arr2 = new Array(3);

//3

const arr3 = Array.of(1, 2, 3, 4);

//4
//const arr4 = Array.from();

//properties

arr.length; //size of array

//aceesing
arr[2]; //square bracket accessing

arr.at(3); //new way of accessing

//more methods

let val = arr.pop(); //remove last =>
console.log(val);
arr.push(3); //push

arr.shift(); //remove from front
arr.unshift(2); //add in front

arr.includes(3);

//objects

const obj = {
  name1: "akhlaq",
  age: 23,
  lang: "english",
};

console.log(obj);
//properties accessing
//dot notion
obj.age;

//bracket

const nam = "name1";

console.log(obj["name1"]);

//eg

const clone = obj;

clone.age = 100;

console.log(obj);

//methods
const obj2 = {
  lang: "hindi",

  sayHello() {
    console.log(this.lang);
  },
};

obj2.sayHello();

//nested objects

const person = {
  address: ["dadada", "dadadad"],
  family: {
    mother: "dadadada",
    father: "dadadadadad",
  },

  closeRel: [
    {
      mother: "dadadada",
      father: "dadadadadad",
    },
    {
      mother: "dadadada",
      father: "dadadadadad",
    },
    {
      mother: "dadadada",
      father: "dadadadadad",
    },
  ],
};

person.address[1];

person.family.father = "raja";

person.closeRel[1].father = "jaja";
