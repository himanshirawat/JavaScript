const arr = [1,2,3,4,5]

//FCF
function square(number){
    return number**2;
}
function cube(number){
    return number**3;
}

//HOF
function display(wrapper, arr){
    let temparr =[]
    for(let number of arr){
        temparr.push(wrapper(number))
    }
    return temparr;
}

const output = display(square, arr);
console.log(output);

console.log(display(cube,arr));