// classes and objects
// class ClassName{
//     constructor(prop1, prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj);

//this keyword refers to the object it belongs to , so idt is the first property 
// class Dog{
//     constructor(dogName , weight, color, breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("Javascript",2.4,"brown","chihuahua");
// console.log(dog);
// console.log(dog.dogName);

// CONSTUCTOR
// there can only be one constructor in the class
// It is the conventional to start the class name wuth capital letter 
// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Pankaj", "Kumar Rajbhar");
// console.log("Hi",p.firstname);
// console.log(p.lastname);

// METHODS
// when defining these method we don't use the function keyword
// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm ",this .firstname)
//     }
// }
// let p = new Person("Pankaj", "Kumar Rajbhar");
//p.greet();

// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm ",this .firstname)
//     }
//     compliment(name,object){
//         return "That's a wonderful "+object+", "+name;
//     }
// }
// let p = new Person("Pankaj", "Kumar Rajbhar");
// let compliment = p.compliment("Harry","hat");
// console.log(compliment);

// properties
// it holds the data called fields
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Pankaj","kumar");
// console.log(p.firstname);

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname , lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname = firstname;
//         }else{
//             this.#firstname = "M"+firstname;
//         }
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Pankaj","kumar");
// console.log(p.firstname);

// getters and setters
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     } // it always return the value
//     set firstname(firstname){
//         this.#firstname = firstname;
//     } // it always override the value
//     get lastname(){
//         return this.#lastname
//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Pankaj","kumar");
// console.log(p.firstname);
// console.log(p.lastname);

// Inheritance // reusablity of the code
// class Vehicle{
//     constructor(color , currentSpeed , maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("moving at ",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Black", 0 ,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
// the super word in the constructor  is calling the constructor from the parent
// we cannot access any Motorcycle specific properties or methods in our Vehicle class

// prototypes 
// it is used add functionality later ON in the class 
// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi there! ")
//     }
// }
// Person.prototype.introduce = function(){
//     console.log("Hi , I'm ",this.firstname);
// };
// Person.prototype.favoriteColor = "Green";
// let p = new Person("Pankaj","Kumar");
// console.log(p.favoriteColor);
// p.introduce();
// console.log(p.introduce);
