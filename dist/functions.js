"use strict";
const add = (a, b) => a + b;
//----------------------------------------------//------------------------------------------------
const calculateWithDiscount = (number1, number2, discount) => {
    return (number1 + number2) - discount;
};
//----------------------------------------------//------------------------------------------------
//parametro opcional
const calculateWithoutDiscount = (number1, number2, discount) => {
    if (typeof discount !== 'undefined') {
        return (number1 + number2) - discount;
    }
    return number1 + number2;
};
//----------------------------------------------//------------------------------------------------
const calTotal1 = (numbers) => {
    let total = 0;
    numbers.forEach((num) => {
        total += num;
    });
    return total;
};
// ----------------------------///---------------------------------------------------------------------
//TRABALHANDO COM REST PARAMETERS
const calTotal2 = (...numbers) => {
    let total = 0;
    numbers.forEach((num) => {
        total += num;
    });
    return total;
};
console.log(calTotal2(1, 2, 3, 5));
