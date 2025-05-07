{
    // Custom type guard
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// Use the guard in a function
function printUpperCase(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log("Not a string.");
    }
}

// Example usage
printUpperCase("hello");      // Output: HELLO
printUpperCase(123);          // Output: Not a string.

}