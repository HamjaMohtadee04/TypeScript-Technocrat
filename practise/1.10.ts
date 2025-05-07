// Task 10: Nullish Coalescing

function getDisplayName(name: string | null | undefined): string {
    return name ?? "Anonymous";
}

// Example usage:
console.log(getDisplayName("Hamja"));      // Output: "Hamja"
console.log(getDisplayName(null));         // Output: "Anonymous"
console.log(getDisplayName(undefined));    // Output: "Anonymous"
