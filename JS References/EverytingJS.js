//----comments----

// in line comment same as java

/* multi line comment
same as java */


//----data types and variables----
/* data types can be any of the below
undefined, null, boolean, string, symbol, number, and object */

var myName = "vincent"; /* var just means variable and can be used throghout
your whole program */

//there are three ways to define data types in JS
let home = "House"; //let, can only be used in the scope of where you declared it

const lastName = "Banks"; //const, never changes


//----Storing Values with Assignment Operator/ Initializing variables----
var a; //declare variable to be assigned later
console.log(a);

var b = 2; //assign variable
//var is generally bad practice, try to use let and const more often

a=7; //we can assign the var a here 

b=a; //we can also assign one variable to another so now b is equal to the contents of a

console.log(a); //console.log loggs whatever you ask it to into the console

//----Math Operators----
let sum = 10+10; //addition
console.log(sum);

sum = 10 -5; //subtraction

sum = 10*10; //multiplacation
console.log(sum);

sum = 10/5 //division
console.log(sum);

//---Incrementing and Decrementing Numbers----
let addMe = 90;

addMe++; //increment 
console.log(addMe);

addMe--; //decrement
console.log(addMe); 

//---Floats---
const float = 0.009; //A decimal is a float

// these will act the same as integers
let sumFloat = 0.009 * 10.8; //m
console.log(sumFloat);

sumFloat = 0.009 / 10.8;//d
console.log(sumFloat);

sumFloat = 0.0009 + 10.8;//a

sumFloat = 0.0009 - 10.8;//s

//----remainder/modulo----
/* a modulo will find the remainder of a division equation
example: */
const modulo = 10 % 43; //modulo is expressed with %
console.log(modulo);

//----Augmented Math Operators----
let num = 6;
let num2 = 6;
let num3 = 6;

//instead of doing 
num = num + 6;
num2 = num2 * 6;
num3 = num3 / 6;
//JS allows for shortcuts like this
num += 6;
num2 *= 6;
num3 -= 6;
console.log(num);
console.log(num2);
console.log(num3);


