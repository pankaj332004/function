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


// creates objects
// const apples = {name : 'Apples'};
// const bananas = {name :'Bananas'};
// const oranges = {name : 'Oraonges'};

//JavaScript Map.groupBy()
// Create an array
// const fruits =[
//     {name : "apples",quantity:300},
//     {name : "bananas",quantity:500},
//     {name : "oranges",quantity:200},
//     {name : "kiwi",quantity:150},
// ];
// //callback function to group Elements
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// //Group by Quantity
// const result = Map.groupBy(fruits,myCallback);
// //
// console.log(result);

// JavaScript Destructuring
// // Create an Object
// const person={
//     firstName:"Jhon",
//     lastName:"Doe",
//     age : 50
// };
// Destructuring
//let{lastName,firstName,country ="US"}=person;
// order of the properties does not matter
//console.log(person.firstName);
// destructuring is not destructive 

// Object property Alias
//let{lastName:name} = person;
//String Destructuring
// let name ="GurukulTheSchool";
// let[a1,a2,a3,a4,a5]=name;
// console.log(person.name);

// const Fruits =["Bananas","Oranges","Apples","Mangos"];
// let[Fruits1,,,Fruits2] = Fruits;
// console.log(Fruits2);

// array positioning indexing
// const Fruits =["Bananas","Oranges","Apples","Mangos"];
// let{[0]:Fruits1,[1]:Fruits2} = Fruits;
// console.log(Fruits[3]);

// The Rest Property
// const numbers =[10,20,30,40,50,60,70];
// const[a,b,...rest] =numbers;
// console.log(numbers);

// 
// const fruits=new Map([
//     ["apple",500],
//     ["orange",300],
//     ["banana",100],
// ]);
// let text = "";
// for(const[key,value] of fruits){
//     text += key+" is "+value+" " ;
// }
// console.log(text);
 
// let firstName ="John";
// let lastName ="Doe";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);

// JavaScript exponential operation
// let x =5;
// let z =x**2;
// console.log(z);
// console.log(Math.pow(x,2));

// JavaScript Array includes()
// const fruits = ["Bananas","Orange","Apple","Mango"];
// console.log(fruits.includes("Mango"));
// console.log(fruits.includes("Bananas",3));
// the include method is case sensitive.

// trailing commas
// the trailing commas have been array literals , later object literals joined arrays
// using trailing commas in arrays
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const sparseArray =[1,,,4,5,,];
// console.log(sparseArray);
// console.log(sparseArray.length);

// using trailing commas in objects
// const person={
//     firstName : "John",
//     lastName : "Davis",
//     age : 30,
// }

// const person={
//     firstName : "John",
//     ,
//     age : 30,
// }

//console.log(person);

// 
// function createRectangle(
//     w, 
//     h,
// ){}
