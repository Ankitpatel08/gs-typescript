const button = document.querySelector('.add-cta');

// declare type of parameter
const add = (num1: number, num2: number) => num1 + num2;

const btnClickHandler = () => {
    // to access value, denote as HTMLInputElement
    const firstInput = document.querySelector('#num1') as HTMLInputElement;
    const secondInput = document.querySelector('#num2') as HTMLInputElement;

    // as add function will accept number, typecast string to number prepending +
    let result = add(+firstInput.value, +secondInput.value);
    
    console.log(result);
}

button.addEventListener('click', btnClickHandler);