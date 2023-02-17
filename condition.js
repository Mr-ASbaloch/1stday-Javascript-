// if statement 
let age=20;
if ( age >20)
{
console.log("you are eligible")
}

else
{
    console.log("you are not eligible")
}


// other example

let book="math";
if (book==="chemistry")
{
    console.log("this is chemistry book")
}
else if(book==="math")
{
    console.log("this is math book")
}
else{
    console.log("irrelevant book")
}



// switch


let grade="f";
switch(grade)
{
case'A':
console.log("excellent")
break;
case 'B':
    console.log("best")
    break;
    case 'c':
    console.log("pass")
    break;
    default:
    console.log("work hard")
}


let day=5;
switch(day)
{
case 1:
console.log("today sunday")
break;
case 2:
console.log("today monday")
break;
case 3:
console.log("today wednesday")
break;
case 4:
console.log("today thursday")
break;
default:
    console.log("today friday")
}

// nested if statement 

let num=20;

if (num >=10)
{
    console.log("number is greater than 10")
}
 if (num >= 15){
    console.log("number is also greater than 15")
 }
else{
    console.log("number is less than 10")
}
