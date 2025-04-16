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