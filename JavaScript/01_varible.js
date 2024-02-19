//js

// varible

const name = "arish"; // const=> no change

let age = 3; //let=> future change

let cpe;

cpe = "dada";

cpe = "arish";

// Data Types

//number
const number = 1;

// string
const string = "computer"; //string
const str1 = "d"; //char

//boolean
const boolean = false;

//undefined
const missing = undefined; //empty

//null
const iKnowHeIsNotHere = null; //empty intentional

//Symbol
const syb = Symbol("dad");

//big int
const big = 31478247289427427842742742784724n;

//Non primitive

//arr
const arr = [1, "ad", 3];

//obj
const obj = {
    data: "dad",
    number: 1,
};

//single

/*
multiline
 */

//operators

const add = 2 + 3;

const pow = 2 ** 2;

// assignment opp

let i = 10;

//shothand
i += 12; // i=i+12

//inc /dec
let x = 1;
x++; //post increment
++x;

//predance
const eq = 2 * (3 + 3);

//relation opp

//>
//<
//>=
//<=

// string vs template literal

let st = "java"; //string
st = st + " dea";

//expression vs statement
//1+1=2

//if
//switch
const lit = `${2 + 2} java`;
console.log(lit);

//eg
const name1 = "alsamd"; //user

const mess = `${name1} hello`;

console.log(mess);

//conditional
/*if (condtion) {
} else {
}*/

//chain
/*if (condtion) {
} else if (condtion) {
} else if (condition) {
} else {
}*/

//nan notanumber

const check = isNaN(11);
console.log(check);

// truthy false

//truth
("java");
1;
true;

// false
0;
null;
undefined;
false;
("");

if (!0) console.log("here false")

//logical

//&&;||;!;

//ternary

//let i = 0;
//          condition  op   true         :     false
const value = i < 10 ? "i is smaller" : "i is greater"


//function

/*function <name>(){

    //body
}*/

function myName() {
    console.log(`my name is ${name1}`)
}


//arguments and parameters
function myName(name) {//recive value inside function
    console.log(`my name is ${name}`)//use received value
}

let arg = "akhlaq"
myName(arg);//send value to func

//return
function myName(name) {//recive value inside function
    console.log(`my name is ${name}`)//use received value

    console.log("about to return")
    return;
    console.log(`my name is ${name}`)//use received value
    console.log(`my name is ${name}`)//use received value

}

myName(arg);

// return value

function myName(name) {//recive value inside function
    console.log(`my name is ${name}`)//use received value

    console.log("about to return")
    return 3;
}

let valueqq = myName(arg);
console.log(valueqq)

//camelCase

const isPresent = false;

//tomo strict,collision,== vs ===