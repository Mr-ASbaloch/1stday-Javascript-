// array manipulation

let book=['eng','urdu','science','chem']
console.log(book[3])
console.log(book.length)
book[2]="apple";
console.log(book)

// push
book.push('phys');
console.log(book)

// unshift
book.unshift("pkst")
console.log(book)

// pop 

book.pop();
console.log(book)

// splice 

book.splice(2,4);
console.log(book)

// clear 

book=[];
console.log(book)
book.length=0;
console.log(book)

// position 

let New=book.indexOf('eng');
console.log(New);

// array to string 
let fruit=['banana','apple','orange']
let str=fruit.toString();
console.log(str);

// join to arrays

console.log(fruit.join("-"));

// slicing of array 
console.log(fruit.slice(0,1)); 

// splicing of array 

console.log(fruit.splice(2));

// concatination

console.log(fruit.concat(fruit))

// loop for Element

let count=[1,3,5,8,9,0,4];
let len=count.length;
for (let  i=0; i<len; i++)
{
console.log(`element ${i} is ${count[i]} \n`)
}

// multidimension array

let multi=[
    ['book',1],
    ['book',1 ,['chem',1]],
    ['book',1],
    ['book',1],
    ['book',1]
]
console.log(multi[1][2][0])



