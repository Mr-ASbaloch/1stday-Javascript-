// json parse

let str = `{

    "name":"saeed",
    "age":24 ,
    "city":"fsd"

    

}

`;
let obj = JSON.parse(str);
console.log(obj.age);

// json stringyfy

let obj1 = {
  name: "ahmad",
  age: 20,
  city: "fsd",
};

let other = JSON.stringify(obj1);
console.log(other);
