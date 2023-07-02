const arr = [1,2,3,4,5]

function square(number){
    return number**2;
}

// call backs
const output = arr.map(square);
console.log(output);

// arrow function
const result = arr.map((number) => number**3)
console.log(result);