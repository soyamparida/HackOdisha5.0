//Question :-

/* Create a faulty calculator using Java Script

This faulty calculator does following:
1.  It takes two numbers as input from user
2.  It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

Catch :- It performs those wrong operations only 10% of the times.

*/

//    ANSWER          ANSWER           ANSWER           ANSWER           ANSWER            ANSWER          ANSWER           ANSWER    

let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random > 0.1){
    //perform correct calculation;
   console.log(`The result is ${a} ${c} ${b}`)
   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}