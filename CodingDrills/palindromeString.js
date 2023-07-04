// My Method
let str1 = 'abcba';
const arr = [...(str1.split(''))];
arr.reverse();
const str2 = arr.join('');
if(str2 === str1){
    console.log("Yes Palidrome String")
}
else console.log("Not a Palidrome String")


// Course Method
const str = "malayala";
function getReversedStr (str){
    let reversedStr = "";
    for (let i=str.length-1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

const result = getReversedStr(str);
if (result === str){
    console.log("String is a Palindrome");
}else{
    console.log("String is not a Palindrome");
}