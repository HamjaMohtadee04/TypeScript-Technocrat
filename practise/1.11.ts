// Task 11: Handling unknown Type

function processData(data: unknown): string | number | undefined {
    if (typeof data === 'string') {
        return data.toUpperCase();
    } else if (typeof data === 'number') {
        return data * data;
    }
}
console.log(processData('nafi'));