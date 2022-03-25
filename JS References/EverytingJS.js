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

//----Concantination String Shortuts----
let mySentance = "this is sentance 1";
//A short cut for concantinating strings is
mySentance += ". this is sentance 2.";
console.log(mySentance);

//you can also append Strings with variables
let adjective = "cool";
let myStr = "Vincent is ";

myStr += adjective;
console.log(myStr);

//----Bracket Notation----
//This is used for getting a character at a specific index of a string
const name = "vinny";
console.log(name[0]); //returns the first character of the string

//----Word Blanks----
//adlib type game with the function wordBlanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";

    result += myAdjective + myNoun + myVerb + myAdverb;

    return result;
}

console.log(wordBlanks("dog ", "big ", "ran ", "quickly "));

//----Arrays----
//arrays are created as so in JS
let array = []; //this is an empty array
//we can populate an array like so
array = [1,2,3,4,5];
console.log(array);
// we can also create multidimensional arrays as so (also called nested array)
let mArray = [[1,2,3],[1,2,3]]
console.log(mArray)

//arrays can also be accessed at certain indexes
console.log(array[0])
//for nested array like so
console.log(mArray[0][1])

// in JS you can also edit an array at a specific index like so
array[0] = 0;
mArray[0][1] = 0;
console.log(array)
console.log(mArray)

//you can have pinned data to the end of an array with the push function
let anArray = ["word","word2","word3"];
anArray.push(["word4","word5"]);

console.log(anArray);

//unshift adds an element to the beggining of an array
anArray.unshift("word6");
console.log(anArray);

//you can remove an item from an array with the pop function
let someArray = [1,2,3,4];
//pop() removes the last element of the array and returns it, that can then be stored in a variable
const popValue = someArray.pop();
console.log(popValue);
console.log(someArray);

//the shift() function is similar to the pop function except it removes the first element of an array
const shitValue = someArray.shift();
console.log(shitValue);
console.log(someArray);

//----functions----
//this is an example of a function in JS
function exampleFunction() {
    console.log("this is a function");
}
// the function then can be called later
exampleFunction();

//functions can also take in parameters 
function exParameters(a, b){
    console.log(a-b);
}
exParameters(1,2);
//if you do not specify a return value the function is undefinded
let value = 2;
function unDefinded(){
    value += 5;
}
console.log(unDefinded());


//----Global Scope----
//Scope referes to the visibillity of variables
//Variables defined outside of a function block have global scope and can be used everywhere
let myGlobal = "global";
//we can then access this in anything within this script
function returnGlobal(){
    myGlobal = "Ive Changed!"
    console.log(myGlobal);
}
returnGlobal();
//if we define a variable in a function but do not add a type to it, it will automatically become global
function globalExample(){
    noType = "Im Global too!";
    //this variable would only be available in this function since it is typed meaning it is local scope
    let type = "im not global";
}
//we can then access the noType variable in this next function here
function globalExample2(){
    noType = "Ive changed in this function!"
    console.log(noType);
    
}
globalExample2();
