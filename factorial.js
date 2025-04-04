
// using loop

function facto(n) {
    if (n<0) return "factorial of non-inter not defined"

    if(n===0 || n===1) return "factorial is 1"
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res*=i
        
    }
    return res
}

// console.log(facto(5));

function fact (n){
if (n<0) return "not defined"
if(n===0 || n===1) return "factorial is 1 "
return n*fact(n-1);
}

console.log(fact(6));