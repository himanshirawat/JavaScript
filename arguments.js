// argument object are array like object , contain values of all the arguments passed to a function.

function first(){
    console.log(arguments);

    // indexing in arguments
    arguments[0] = 9;
    console.log(arguments);
    console.log(arguments[4]);

    //iterating in arguments
    let total = 0;
    for(let numbers of arguments){ 
        total += numbers;
    }
    console.log(total);

    //length of arguments
    console.log(arguments.length)

    // to perform operation of array in arguments we convert arguments into array using spread operator
    const arr = [...arguments];
    console.log(arr);
}

first(3,5,4,1,6,7);