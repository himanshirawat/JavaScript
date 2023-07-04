// const readInt = require("readline-sync");
// const str = readInt.question['str : ']

const str = '12345333453545'
const mask = '#'.repeat(4);

//My method
function check(str){
    let result = '';
    for(let i=0;i<str.length-4;i++){
        result += str[i]
    }
    return result
}
console.log(check(str)+ mask);

// Course method
const result = str.slice(0,str.length-4) + mask;
console.log(result);