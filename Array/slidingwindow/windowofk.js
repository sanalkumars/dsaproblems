
let arr = [1,3,-1,2,4,-3,5,6] 
let k = 3


const findmaxvalueinarray = (arr , k) =>{
    let res = [];
    let n = arr.length  ;
    for (let i = 0; i <= n -k; i++) {
        let max = arr [i];
        for(let j =i ; j < i + k ; j++){
            if (arr[j] > max) {
                max =arr[j]
                
            }
        }
        res.push(max);
    }

    return res
}

const r = findmaxvalueinarray(arr,k);
console.log("r",r);
