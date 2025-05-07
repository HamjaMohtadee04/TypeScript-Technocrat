
{
    function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example usage
const user = {
    name: "Hamja",
    age: 25,
    email: "hamja@example.com"
};

console.log(getPropertyValue(user, "name"));  // Output: Hamja
console.log(getPropertyValue(user, "age"));   // Output: 25
console.log(getPropertyValue(user, "email"));   
}