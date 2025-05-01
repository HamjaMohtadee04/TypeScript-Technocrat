//learning function
//normal and arrow function
{
function add (num1: number, num2: number=10) :number{
    return num1+num2
}

add(5,4)


//arrowfuncion
const addArrow= (num1: number, num2: number) :number => num1+num2 

//method ---> if there a object inner a function

const poorUser ={
    name:'nafi',
    balance :0,
    addBalance(balance:number) : string{
        return `My new balance is :${this.balance+balance}`;
    },
}

const array :number[]=[1,2,4]

const newArray:number[] = array.map((elem:number):number=>elem*elem)
}