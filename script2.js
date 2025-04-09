// function tester(para1, para2){
//     return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1,arg2));


// default arguments are the trailling arguments
// function addTwoNumbers(x = 2, y = 3){
//     console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4);


// special function
// arrow function
// let doingstuff = (x) => console.log(x);
// doingstuff("hello");cd 


// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(5,3);

// const arr = ["squirrle" , "aplaca" , "buddy"];
// arr.forEach(e => console.log(e));

// spread operator
// let spread = ["so" , "much" ,"fun"];
// let message =["Javascript","is",...spread,"and","very","powerful"];
// console.log(message);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr = [5,9];
// addTwoNumbers(...arr);

// function addTwoNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr1 = [5,9];
// let arr2 = [6,7];
// addTwoNumbers(...arr1 , ...arr2);

// REST operator is to hold rest argument also
// function someFunction(param1 , ...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","how are you?");


//returning function values
let resultsArr = [];
for(let i=0;i<10;i++){
    let result = addTwoNumbers(i,2*i);
    resultsArr.push(result);
}
function addTwoNumbers(x,y){
    //console.log(x+y);
    return x+y;
}

console.log(resultsArr);