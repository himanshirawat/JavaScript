// my solution
const arr = [1,2,9,45,5,2,7,18];

for(let i=0;i<arr.length;i++){
    let a= arr[i];
    if(arr[i]%2==0){
        console.log({a},a+1);
    }
    else{
        console.log({a}, a-1);
    }
}

// course method
const solution = arr.map(num => num % 2 === 0 ? num - 1 : num + 1)
console.log(solution);

