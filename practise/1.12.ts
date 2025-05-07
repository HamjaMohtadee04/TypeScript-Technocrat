// Task 12: Never Type Function

function handleError(message: string): never {
    throw new Error(message);
}
console.log(handleError("naf"));