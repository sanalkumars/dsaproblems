
const isPrime =  (num:number) => {
    if(num === 0 || num ===1) return "Niether Prime Nor Composite"

    let divider :number = 2;
    let sqrt:number = Math.sqrt(num);

    while (divider<=sqrt) {
       if (num % divider === 0) {
        return false
       }
       divider++;

    }
    return true;
}