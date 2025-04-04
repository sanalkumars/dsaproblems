

function moveZeroToEnd(array) {
    let nZ =0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [array[i],array[nZ]] = [ array[nZ],array[i]];
            nZ++;
        }
        
    }
    return array
}
let array = [0,8,4,50,5,0,4,0]

const result = moveZeroToEnd(array) 

console.log(result);