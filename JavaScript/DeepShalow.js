/*
const obj = {
  name: "akhlaq",
  lega: 2,
};

const obj2 = obj;

obj2.name = "kaif";

//console.log(obj);
//console.log(obj2);

//shallow copy

const person = {
  name: "akhlaq",
  lega: 2,
  rel: ["sabir", "amina", "dilshad"],
};

const person2 = { ...person };
person2.name = "hesham";
person2.rel[1] = "sama";
//console.log(person);
//console.log(person2);

//deep copy
const personDeep = {
  name: "akhlaq",
  lega: 2,
  rel: ["sabir", "amina", "dilshad"],
};

const person2Deep = JSON.stringify(personDeep);
const paresed = JSON.parse(person2Deep);
paresed.rel[1] = "sama";
paresed.name = "hesham";

//console.log(personDeep);
//console.log(paresed);

//structure clone
const deepclone2 = structuredClone(personDeep);

//spread and rest
//...    and ...


*/

// rest op

//array destruct

const arr = [1, 2, 3, 4, 4];

const [, , third, fourth] = arr;
console.log({third, fourth});

//object destruct

const person = {
    name: "samad",
    age: 18,
    father: "abuuuu",
    rel: {
        cousin: "yusuf",
    },
};

const {
    name: nameOfPerson = 10,
    rel: {cousin},
} = person;

console.log(cousin);

//spread
// array,set,map

const arr1 = [1, 2, 3, 4, [10, 4, 5, 3]];
const arr2 = [...arr1];

//console.log({ arr1, arr2 });

function ran(one, two, three) {
    //console.log(arguments);
}

const arr3 = [1, 2, 3, 3, 4, 5, 44, 4436];
ran(...arr3);

//rest op(aram)
const [first1, second, ...arr2] = arr;
console.log({first1, second, arr2});

function ran(...arr) {
    console.log(arr);
}

const arr3 = [1, 2, 3, 3, 4, 5, 44, 4436];
ran(1, 2, 3, 4, 3, 5, 5);


/*
async await
js tooling

prototypical chain
modules
*/