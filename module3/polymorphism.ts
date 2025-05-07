{
    //Polymorphisom
class Person{




getSleep(){
    console.log(`I am sleeping for 8 hours`)
}



}

class Student extends Person{
    getSleep(){
        console.log(`I am sleeping for 7 hours`)
    }
}

class Developer extends Person{
    getSleep(){
        console.log(`I am sleeping for 5 hours`)
    }
}

const getSleepingHours =(param: Person)=>{
   param.getSleep()
}


const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)



class Shape{
    getArea():number{
        return 0
    }
}

class Circle extends Shape{
    radius :number

    constructor(radius:number){
        super()
        this.radius =radius
    }
    getArea():number{
        return Math.PI *this.radius* this.radius
    }
}



class Rectangle extends Shape{
    height :number
    width :number

    constructor(height:number, width:number){
        super()
        this.height =height
        this.width =width
    }
    getArea():number{
        return this.height* this.width
    }
}

const getShapearea =(param:Shape)=>{
    console.log(param.getArea());
}
const Shape1 = new Shape()
const Shape2 = new Circle(10)
const Shape3 = new Rectangle(10,20)
getShapearea(Shape1)
getShapearea(Shape2)
getShapearea(Shape3)
//

}