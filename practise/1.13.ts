// Task 13: Generic Function to Remove Duplicates

function removeDuplicates<T>(items: T[]): T[] {
    return Array.from(new Set(items));
}
console.log(removeDuplicates([1,1,2,3,4]));