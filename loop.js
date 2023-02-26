// loops

// for loop





    let x;
    for (let x = 0; x < 7; x++) {
        console.log('number is ' + x);


    }

    const cars = ["volvo", 'civic', 'mehran'];
    let i, len;
    for (i = 0, len = cars.length, i < len; i++;) {
        console.log("cars" + i);
    }

    // for in loop
    const number = [12, 14, 38, 80, 34];
    for (let y in number) {
        console.log(number[y]);
    }



    // for of loop
    const fruits = ['gava', 'banana', 'apple', 'pineapple'];
    for (let z of fruits) {
        console.log(z);
    }


    // while loop
    let j = 0;
    while (j < 5) {
        console.log("number is " + j);
        j++;
    }

    // do while loop
    let k = 0;
    do {
        console.log("number is " + k);
        k++;
    }
    while (k < 8);

// continue in loop

for (let n=0; n<6; n++)
{

    console.log(n)
    if (n===2){continue;}
}



// example of loop 
//table of 12 

for ( i=1; i<=10; i++)
{
console.log(`12 X ${i} = ${12*i}`)
}

