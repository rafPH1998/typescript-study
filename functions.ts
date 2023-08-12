const add = ( a: number, b: number): number => a + b;

//----------------------------------------------//------------------------------------------------

const calculateWithDiscount = (number1: number, number2: number, discount: number): number => {
    return (number1 + number2) - discount
}

//----------------------------------------------//------------------------------------------------

//parametro opcional
const calculateWithoutDiscount = (number1: number, number2: number, discount?: number): number => {
    if (typeof discount !== 'undefined') {
        return (number1 + number2) - discount
    } 

    return number1 + number2
}
//----------------------------------------------//------------------------------------------------

const calTotal1 = (numbers: Array<number>): number => {
    let total = 0

    numbers.forEach((num) => {
        total += num
    })
    return total
}

// ----------------------------///---------------------------------------------------------------------

//TRABALHANDO COM REST PARAMETERS
const calTotal2 = (...numbers: Array<number>): number => {
    let total = 0

    numbers.forEach((num) => {
        total += num
    })
    return total
}

console.log(calTotal2(1, 2, 3, 5))

