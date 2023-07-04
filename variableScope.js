let a = 9; // Global Variable
function x(){
    let b = 4; // Local Variable
    console.log({a});
    function y(){
        console.log({b});
    }
    y();
}
x();


// Block Scope
{
    let c = 12; // let and const perform bloac scope
    var d = 7; // var is a global term it don't perform block scope
    console.log(c); // 12
}

console.log(d); // 7 
console.log(c); // c is not defined error