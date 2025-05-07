// Task 2: Functions with Optional and Literal Types

function describeUser(name: string, age: number, role?: 'admin' | 'user' | 'guest') {
    console.log(`Name: ${name}, Age: ${age}`);

    if (role === 'admin') {
        console.log("Welcome Admin! You have full access.");
    } else if (role === 'user') {
        console.log("Welcome User! You have limited access.");
    } else if (role === 'guest') {
        console.log("Welcome Guest! Please sign up to get more features.");
    } else {
        console.log("Role not specified.");
    }
}

// Examples:
describeUser("Hamja", 25, "admin");
describeUser("Lamia", 20, "user");
describeUser("Rahim", 18, "guest");
describeUser("Anonymous", 30);
