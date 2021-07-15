const generateError = (message: string, code: number): never => {
    throw {message: message, errorCode: code};
}

// returns nothing
const result = generateError('An Error Occured', 500);