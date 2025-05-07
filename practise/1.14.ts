{
    // Define a type alias for User
type UserData = {
    name: string;
    age: number;
};

// Simulate fetching user data asynchronously
async function fetchUser(): Promise<UserData> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Hamja", age: 25 });
        }, 1000); // 1 second delay
    });
}

// Example usage
fetchUser().then((user) => {
    console.log("Fetched user:", user);
});

}