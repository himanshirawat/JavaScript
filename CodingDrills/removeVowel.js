const str = "Hello";

function check(str){
    const arr = ['a','e','i','o','u'];
    let result = "";
    for(let char of str){
    if(!arr.includes(char.toLowerCase()))
      result += char;
    }
    return result;
}

console.log(check(str));
