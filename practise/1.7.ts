{
    // Task 7: Type Narrowing with Union Type

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * value;
    }
}

console.log(processValue(5));

}