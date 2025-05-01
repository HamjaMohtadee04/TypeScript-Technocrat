//reference type-->object

const user :{
    // company:'nafitech'; //type--> literal types, when a value behaviour like type or value is fixed .  already set
    readonly company:string;
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried:boolean;
} = {
    // company:'nafitech j',
    company:'nafitech',
    firstName : 'hamza',
    middleName : 'mohtadee',
    lastName : 'nafi',
    isMarried: false,
}

// user.company = "PH" Cannot assign to 'company' because it is a read-only property . BECAUSE THE VALUE IS FIXED AND READONLY WHICH IS CANNOT BE FURTHER CHANGE, nafitech to other.