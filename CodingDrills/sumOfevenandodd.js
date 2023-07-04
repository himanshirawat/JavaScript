const arr = [1,4,3,2,6,5,7]

//my method
const even = arr.filter(number => number%2==0).reduce((acc,cur)=> acc+cur);
const odd = arr.filter(number => number%2 != 0).reduce((acc,cur)=> acc+cur);
console.log('Even :' ,even ,'Odd : ',odd);



//Course method
const reducerFunction = (acc, cur) => cur % 2 === 0 ? {...acc, even: acc.even + cur} : {...acc, odd: acc.odd + cur}
const result = arr.reduce(reducerFunction, {even: 0, odd: 0});
console.log(result);