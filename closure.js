// closure is a function that remembers its outer variable and access them.

function x(){
    let a = 12;
    console.log({a});
    function y(){
        console.log({a});
        console.log({b}); // undefined
        console.log({c}); // undefined
        var b;
        var c = 5;
        //let a; // a cannot access before initialization
        function z(){
            console.log({c}); // 5
        } z();
    }
    y();
}
x();