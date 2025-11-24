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