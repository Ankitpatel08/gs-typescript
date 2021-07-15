let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Ankit';

// Error: unknown can't be assigned to string
// userName = userInput;

// Need additional check for unkonwn assignment
if (typeof userInput === 'string') {
    userName = userInput;
}