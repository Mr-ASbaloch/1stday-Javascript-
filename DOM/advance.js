// default parameters

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,4))

function sum(a, b) {
  return a + b;
}
console.log(sum(2, (b = 2)));

// rest parameters

function fun(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  console.log(result);
}

fun(6, 7, 9);

// sum of array Element

let array = [1, 2, 4, 5, 7];
let display = 0;
for (let i = 0; i < array.length; i++) {
  display += array[i];
}
console.log(display);

// spread operator

let array1 = [1, 2, 4, 5, 7];
let str="hellow world!"
let output=0;
console.log(...array1,...array);


// template literal

let string= `hello  
welcome
     to my code!         
`
console.log(string)


// array destructing

let arr=[1,3,5,6,9,5,4,8]
let  [num1,num2,,num3, ...other]=arr;
console.log(other)


// Object  destructing nested form

let  obj={
name: "saeed",
age:20,
height:6,
 array4:[1,3,5,6,9,5,4,8]
}
let { name, age,array4:[num4,num5,...remain]}=obj;
console.log(remain)


