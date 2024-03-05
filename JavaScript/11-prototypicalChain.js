const obj1 = {
  name: "akhlaq",
};
const obj2 = {
  address: "allahabd",
};

obj1.__proto__ = obj2;

console.log(obj1);

Object.setPrototypeOf(obj1, obj2);
