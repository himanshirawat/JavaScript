//my solution

// sum of all number less then 40
function sum(number){
    if(number === 1){
        return number
    }
    return number = number + sum(number-1);
} 

console.log(sum(4));

//sum of numbers less than 40 in an array

const arr = [10,34,56,23,89,37]

const result = arr.reduce((acc,cur) => cur < 40 ? acc+cur : acc,0)
console.log(result);