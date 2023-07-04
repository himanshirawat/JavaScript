let a = 12;
let c = 4;
function x(){ // x environment contain log(a) and b=3;
    console.log({a}); // x has reference to outer lexical environment
    let b = 3;
    function y(){
        console.log({b});
        function z(){
            console.log({c}); // for c it check its parent and their parent
        }
        z();
    }
    y();
}
x();