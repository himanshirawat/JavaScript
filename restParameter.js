// Rest Parameter ---> ...rest/...args
// rest make the array of all arguments passed to the function
// rest is used with functions where spread is used for spreading the array

function first(a,b,...rest){
    console.log(a);
    console.log(b)
    console.log(rest);

    // iterate over rest
    let total =0 ;
    for (let number of rest){
        console.log(number);
        total += number;
    }
    console.log('Total : ',total);

    //map() over rest
    console.log(rest.map(number => number+total))

    //splice()
    console.log(rest.splice(1,2))
}

first(6,4,2,5,8,9);