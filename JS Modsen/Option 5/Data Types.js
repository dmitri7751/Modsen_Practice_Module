const calculation = (firstNum, secondNum) => {
    return firstNum % secondNum === 0;
}

console.log(calculation(8, 2)); // true
console.log(calculation(8, 3)); // false
console.log(calculation(15, 5)); // true
console.log(calculation(15, 4)); // false
