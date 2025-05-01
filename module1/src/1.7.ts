{
    //spread operator and distructring
//rest operator

//spread operator

const bros1 :string[] =["nafi","kk","abdul"]
const bros2:string[]=["mamun","amid","kanika"]

bros1.push(...bros2)

const mentors1= {
    typeScript:"mezba",
    redurx:'mir',
    dbms:'mizan'
}
const mentors2= {
    prisma:"firoz",
    next:'tanmoy',
    cloud:'nahid'
}

// show the full mentorlist
const mentorList={
...mentors1,
...mentors2
}


//learn rest operator
// const greetFriends = (friend1:string,friend2:string,friend3:string) =>{
    const greetFriends = (...friends:string[]) =>{
    // console.log(`hi ${friend1} ${friend2} ${friend3} `)

    friends.forEach((friend:String)=>console.log(`hi ${friend}`))
}

greetFriends('abul','babul','kabul','labul','kk')
}