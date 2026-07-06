function sumNumbers(n) {
    let sum = 0; 
    
    for (let i = 1; i <= n; i++) { 
        sum += i;
    }
    
    return sum;
}


console.log(sumNumbers(5)); //15
console.log(sumNumbers(10)); //55
console.log(sumNumbers(100)); //5050