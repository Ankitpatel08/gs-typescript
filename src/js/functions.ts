console.groupCollapsed('*** Functions ***');

const multiply = (n1: number, n2: number) : number => {
    return n1 * n2;
}

const printResult = (num: number) : void => {
    console.log('Result :: ', num);

    // Void won't allow to return any value
    // return num;
}

// let foreverUndefined: undefined;

printResult(multiply(2,3));

// Function type
// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = multiply;

console.log(combinedValues(4,5));

// Callback
const subNumbers = (n1: number, n2: number, cb: (num: number) => void) => {
    let result = n1 - n2;
    cb(result);
}

subNumbers(20, 5, (result) => {
    console.log(result);
});

console.groupEnd();