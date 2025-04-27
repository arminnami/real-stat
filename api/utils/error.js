export const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    // error.message = message;
    console.log(`Error: ${message}`);
    
    return error;
}