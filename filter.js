const arr= [1,2,3,4,5];

// without filter() 
function sol(number){
    if (number > 3)
    return number;
}
function display(wrapper, arr){
    let temArr =[];
    for(let number of arr){
        temArr.push(wrapper(number));
    }
    return temArr;
}
const result = display(sol,arr);
console.log(result);


// with filter()
const output = arr.filter(number => number>3);
console.log(output);

// even number using filter
console.log(arr.filter(number => number%2==0)) ;

// odd number using filter
console.log(arr.filter(number => number%2 !=0)) ;
