{
    // Task 8: AdminUser Intersection Type

type User = {
    name: string;
    email: string;
};

type Admin = {
    adminLevel: number;
};

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
    return `Admin: ${user.name},Email:(${user.email}), level: ${user.adminLevel}.`;
}
const admin1: AdminUser = {
    name: "Hamja",
    email: "hamja@example.com",
    adminLevel: 3
};
console.log(describeAdmin(admin1));


}