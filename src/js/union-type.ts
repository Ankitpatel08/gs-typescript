console.groupCollapsed('*** Union Type ***');

// Custom type
type Combinable = string | number;

// const combine = (input1: string | number, input2: string | number) => {
const combine = (input1: Combinable, input2: Combinable) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedNumber = combine(1, 2);
console.log(combinedNumber);

const combinedNames = combine('Ankit', 'Patel');
console.log(combinedNames);

console.groupEnd();