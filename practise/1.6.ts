// Task 6: Sum using Rest Operator

function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1,2,3,4,5))