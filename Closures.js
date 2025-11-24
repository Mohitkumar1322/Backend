//Closures in JS

// ✔ Hinglish Explanation

// Closure = function ke paas apne parent scope ka access hota hai, even after parent khatam ho jaaye.

// Real Backend Use:

// Rate limiter (store counts)

// JWT secret store karna

// Private variables in modules

// Example: Private Counter

//Example Rate limiter

function rateLimit(){
  let hits=0;
  return function(){
    
    //herre this inner function is remmebering the hits variables initialize above
    //Function jisko apne baap ke variables yaad hote hain — woh closure.”
    hits++;
    if(hitss>5){
      return "Too many requests!";
    }else{
      return "Ok";
    }
  }
}

const apiHit = rateLimit();