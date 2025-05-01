"use strict";
//destructuring
{
    //object distructuring
    const user = {
        id: 345,
        name: {
            firstName: 'hamza',
            middleName: "mohtadee",
            lastName: "nafi"
        },
        age: 25,
        contactNo: '014454541512',
        address: 'bd'
    };
    const { contactNo, name: { middleName } } = user;
    //array destructuring
    const myFriends = ['chandler', 'joe', 'ross', 'rachel', 'mon', 'ron'];
    const [, , besfriend, ...rest] = myFriends;
}
