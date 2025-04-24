const fruits=new Map([
    ["apple",500],
    ["orange",300],
    ["banana",100],
]);
console.log(fruits);
console.log(fruits.size);
console.log(fruits.delete("apple"));
console.log(fruits);


// fruits.clear();  //clear the fruits object
// console.log(fruits);


// console.log(fruits.has(value,key));



// let text=" ";  //scope of text is global
// fruits.forEach(function(orange){
//     text+=key+'='+value;
// });
// console.log(text);



//Enteries
// let text="";
// // for(const x of fruits.entries()){
// // for(const x of fruits.keys()){  //use for key print in this
// for(const x of fruits.values()){  //use for values in this print
//     text+=x;
// }
// console.log(text);


//Sum of all
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);



// const fruits=new Map()
//     fruits.set("apple",500);
//     fruits.set("orange",500);   //key value can be change through the set operator
//     fruits.set("banana",500);
//     fruits.set("orange", 600);//change the value 
//     // console.log(fruits);
//     console.log(fruits.get("orange"));
// //



//JAVA SCRIPT MAP METHOD
//new insertion or change the value through map