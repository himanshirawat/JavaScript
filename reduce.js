const arr = [4,6,3,2,9];

//one way
const reducerfun = (acc,cur) => acc+cur;
console.log(arr.reduce(reducerfun,0))

//second way
console.log(arr.reduce((acc,cur) => acc+cur,0));

//process
// initialvalue acc= 0, currentvalue cur = 4;
// 0 + 4 = 4 ---> acc, cur = 6;
// 4 + 6 = 10 ----> acc, cur = 3;

// 16 + 9 = 24 ----> acc
// acc will be the return value