"use strict";
//learning function
//normal and arrow function
{
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(5, 4);
    //arrowfuncion
    const addArrow = (num1, num2) => num1 + num2;
    //method ---> if there a object inner a function
    const poorUser = {
        name: 'nafi',
        balance: 0,
        addBalance(balance) {
            return `My new balance is :${this.balance + balance}`;
        },
    };
    const array = [1, 2, 4];
    const newArray = array.map((elem) => elem * elem);
}
