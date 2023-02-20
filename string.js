// string manipulation
let name="saeed";
console.log(name)

// template literal
let Newname=(`abdul ${name}`)
console.log(Newname)

// escape character 
let str="hello saeed"
console.log(str)
let str1="hello \n saeed"
console.log(str1)
let str2="hello \t saeed"
console.log(str2)
let str3=  '"hello saeed"  ';
console.log(str3)
let str4=  "hello saeed\" welcom"  ;
console.log(str4 ,str4.length)
console.log(str4[4])

// comparision 

if ("saeed"==str){
    console.log("equal")

}else{
    console.log("not equal")
}

// concatination

let str5=str.concat("",str2);
console.log(str5)

// substring

let string="    hello welcome to my task  ";
console.log(string.substring(0,6));

// position 

console.log(string.indexOf("welcome"))

let str6=" hello welcome to my task hello welcome to my task hello welcome to my task"
console.log(str6.indexOf("hello",8))

console.log(string.lastIndexOf("hello"))

// whitespace remove 

console.log(string.trim())
console.log (string.trimStart())
console.log (string.trimEnd())

// letter case change 

console.log(string.toUpperCase())
console.log(str6.toLowerCase())

// replacement

console.log(string.replace('task','work' ))

// include

console.log(string.includes('Hello'))
console.log(string.includes('hello'))

// search
console.log(string.search('task'))

// slice of string 
console.log(string.slice(4,9))
console.log(string.charAt(4))
