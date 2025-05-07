{
    //static

    class Counter{
       static count:number =0

      static  increment(){
            
            return(Counter.count =Counter.count+1) //this will not work 
        }
      static  decrement(){
            return(Counter.count = Counter.count-1)
        }
    }


const instance1 = new Counter() //diff memory
console.log(Counter.increment());

const instance2 = new Counter() //diff memory
console.log(Counter.increment());

const instance3 = new Counter() //diff memory
console.log(Counter.decrement());




    //
}