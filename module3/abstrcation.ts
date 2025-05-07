{
//abstraction 1.interface 2. abstract
//idea
interface Vehicle1{
   startEngine():void
   stopEngine():void
   move():void
}

// const vehicle1:Vehicle1={
//     name:'toyota',
//     model:2004
// }
//real implementation
class Car implements Vehicle1{
startEngine(): void {
    console.log(`i am starting the car`);
}
stopEngine(): void {
    console.log(`i am stoping the car`)
}
move(): void {
    console.log(`i am moving the car`);
}
test(){
    console.log(`i am testing `);
}
}

const toyotaCar = new Car();
  toyotaCar.startEngine();

  // abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  //implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }
 // const hondaCar = new Car2();
  // hondaCar.startEngine();














    //
}