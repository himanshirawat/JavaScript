const instr = "himanshi";
const code = 2;

//my way with course methods
const encode = (str,code) => {
    let result = '';
    let current = 0;
    for(let i=0;i<str.length;i++){
        current =  str.charCodeAt(i)
        result += String.fromCharCode(current+code)
    }
    return result;
}

console.log('Encoded String:- ',encode(instr,code));

const decode = (str,code) => {
    let result = '';
    let current = 0;
    for(let i=0;i<str.length;i++){
        current =  str.charCodeAt(i)
        result += String.fromCharCode(current-code)
    }
    return result;
}

console.log('Decoded String:- ',decode(encode(instr,code),code));