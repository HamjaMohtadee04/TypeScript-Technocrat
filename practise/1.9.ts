{
    // Task 9: Optional Chaining with Nested Object

function getEmployeeCity(employee: any): string | undefined {
    return employee?.address?.city;
}

// Example usage:
const employee1 = {
    name: "Hamja",
    address: {
        city: "Chittagong",
        country: "Bangladesh"
    }
};

const employee2 = {
    name: "Anonymous"
};

console.log(getEmployeeCity(employee1)); // Output: "Chittagong"
console.log(getEmployeeCity(employee2)); // Output: undefined

}