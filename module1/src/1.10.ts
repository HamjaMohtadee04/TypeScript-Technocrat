{
    //
//union types
// type FrontendDeveloper = 'FakibazDeveloper' | 'JuniorDeveloper'
// type FullStackDeveloper = 'frontendDeveloper' | 'ExpertDeveloper'

// type Developer = FrontendDeveloper | FullStackDeveloper

// const newDeveloper:FrontendDeveloper =  'JuniorDeveloper'

// type User ={
//     name: string;
//     email?:string;
//     bloodGroup:"o+" |"b+" |"ab+"
//     gender:"male"|"female"
// }
// const user1:User={
//     name:"nafi",
//     email:"hamza@gmail.com",
//     bloodGroup:"b+",
//     gender:"male"
// }

//interSectionType
type FrontendDeveloper ={
    skills: string[]
    designation1: 'Frontend Developer'
}

type BackendDeveloper ={
     skills: string[]
    designation2: 'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper
 const fullStackDeveloper:FullStackDeveloper={
    skills:['html','css','express'],
    designation1: 'Frontend Developer',
    designation2:'Backend Developer'
 }
    //
}