// returning with arrow function
// let addTwoNumbers = (x,y) => x+y;
// console.log(addTwoNumbers(12,15));

// let addTwoNumbers = (x,y) =>{
//     console.log("Adding..");
//     return x+y;
// }
// console.log(addTwoNumbers(12,15));

// variable scope in function
// let and const are block scope 
// var is function scope
//local scope 
// function testAvailability(x){
//     console.log("Available here: ",x);
// }
// testAvailability("Hi!");
// console.log("Not available here: ",x); // error

// function testAvailability(){
//     let y="Local variable!";
//     console.log("Available here:",y);
// }
// testAvailability();
// console.log("Not available here:", y); // error

// function testAvailability(){
//     let y="I'll return";
//     console.log("Available here: ",y);
// }

// function doingstuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         let x="local"; // error
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         const x="local";
//     }
// }
// doingstuff();

// global variables
// let globalVar = "Accessible everywhere!";
// console.log("Outside function : ",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global vars inside the function.", globalVar);
// }
//  creatingNewScope("Some parameter");
//  console.log("Still available: ",globalVar);

//  // how to override the global
//  let x= "global";
//  function doingstuff(){
//     let x ="local";
//     console.log(x);
//  }
//  doingstuff();
//  console.log(x);