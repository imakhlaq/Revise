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

console.log(personDeep);
console.log(paresed);

//sturecture clone

const deepclone2 = structuredClone(personDeep);
