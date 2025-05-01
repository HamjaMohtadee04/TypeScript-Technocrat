{
//Type Alias

type Student ={
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address:string;
}
const student1 : Student={
    name: 'nafi',
    age: 24,
    gender: 'male',
    contactNo: "1121212121212",
    address:"bandorban"
}

const student2 : Student={
    name: 'mir',
    age: 40,
    gender: 'male',
    address:'dhk'
}
const student3  : Student={
    name: 'mohtadee',
    age: 40,
    gender: 'male',
    address:'mym'
}

//type alias in string
type UserName = string

const userName : UserName ="hamja"
type IsAdmin = boolean
const bool:IsAdmin= true

//type alias in function
type Add =(num1:number,num2:number) => number
const add:Add =(num1,num2)=>num1+num2 

//
}