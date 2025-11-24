// Hoisting in JS
// 🎯 Hoisting Kya Hota Hai? (Hinglish Explanation)

// JavaScript jab code run karta hai na, usse pehle ek phase hota hai — memory creation phase.

// Is phase me:

// function declarations upar move ho jaate hain

// var wale variables ka declaration upar chala jaata hai (value = undefined set hoti hai)

// let/const wale variables ka declaration hota hai but uninitialized rehte hain (Temporal Dead Zone me hote hain)

// Isi process ko hoisting bolte hain.


//
//example
var a;  // declaration hoisted


console.log(a); // undefined


a = 10; // initialization NOT hoisted


//hoisting With Functions 

greet();

// Kyun idhr error ni aya function main?
// Pure function ko upar lift kar deta hai (function body + declaration).
function greet(){
  console.log("mohit");
}

greet();

//Hoisting with var a is not possible it will give error
Kyun?

// var sayHi hoist hota hai as undefined

// function assign later hota hai
a();

var a=function mohit(){
  console.log("error");
  
}