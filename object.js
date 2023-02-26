// let person={
//     fName:'abdul',
//     lName: 'saeed'

// }
// console.log(person.fName,person['lName'])

// // modify property

// person.age=20;
// console.log(person)
// console.log(delete person.lName)
// console.log(person)
// console.log('age'in  person)

// // itrate all Element
// for ( key in person)
// {
// console.log(key + " "+ person[key])
// }

// // function in object

// person.sayhello=function(){
//     console.log("hello !");
// }
// person.sayhello();

// // this use

// let car ={
//     brand:'tata',
//     model:'suzuki',
//     sayhello(){
//              console.log('hello i have '+this.brand +'car and my name is '+person['fName'])
//     }
// }

// car.sayhello();

// // math object

// Math.PI
// console.log(Math.PI)

// let x=Math.round (2.7);
// console.log(x)

// console.log(Math.sqrt(4,2))
// console.log(Math.pow(2,5))

// let num=Math.min(1,6,10,23,67,8);
// console.log(num)

// // random number generator

// let z=Math.floor(Math.random() *10 +1);
// console.log(z)

// // function for random number generator

// function getrandom(min,max){
//     let s=Math.floor(Math.random() *(max-min) )+min;
//     console.log(s)
// }

// console.log(getrandom(10,20))

// // date object

// let date=new Date();
// console.log(date)

// // compare date

// let xDate=new Date("march 12 ,2022 11:12:33");
// let yDate =new Date();
// if( xDate>yDate)
// {
// console.log("date is in future")
// }
// else{
// console.log("date is in past")
// }

// let info = {
//   fName: "saeed",
//   lName: "ahmad",
//   age: 20,
// };
// console.log(info["lName"]);

// // display object in loop

// for (let y in info) {
//   console.log("datail about info is " + " " + info[y]);
// }

// // display elements in array

// console.log(Object.values(info));

// // nested object

// const bio = {
//   fName: "abdul",
//   lName: "ahmad",
//   area: {
//     town: "fsd",
//     street: "ppl colony",
//     house: {
//       hNumber: 12,
//     },
//   },
// };
// console.log(bio.area.house);

// // this keyword
// // craeting function
// let bus = {
//   seatNumb: 12,
//   seatstand: "well ",
//   showseat() {
//     console.log(this.seatNumb + " " + bio.fName);
//   },
// };
// bus.showseat();

// // getter property

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get getlang() {
//     console.log(this.language);
//   },

// };

// person.getlang()

// // setter property
// let man = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   set  setage(n) {
//     this.age= n

//   },
// };
// man.age = 20;
// console.log(man)

// Object constructors

function person(name, age, height, sex) {
  (this.fName = name), (this.age = age), (this.height = height), this.sex;
}

let person1 =new person("saeed", 20, 6, "male");
let man=new person("ali", 20, 5, "male");
let woman =new person("ahmad", 20, 4, "male");
console.log(person1,man,woman)

