// basic program of addition in js.
function sum(number){
    let total = 0;
    for(let i =1;i<=number;i++){
        total += i;
    }
    return total;
}

console.log('Sum: ',sum(10));


// Sum using recursion
function sumRecursion(number){
    if(number === 1)
        return number;
    return number =  number + sumRecursion(number-1);
}

console.log('Sum using recursion : ',sumRecursion(10))

//Factorial using Recursion
function fact(number){
    if (number === 1)
       return number;
    return number = number*fact(number-1);
}

console.log('Factorial : ',fact(5));