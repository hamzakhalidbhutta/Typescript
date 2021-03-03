// Used to override the existing types of the elements

let userName: string = "Hamza";

// will cause error
// let countUser : number = <number>userName;

// Forced Type Assertion
let countUsers: number = <number><any>userName;

// Prints name successfully
console.log(countUsers)

// 
interface House {
    name: string,
}

interface Mension{
    name:string,
    bedRoom: boolean
}
function getProperty(): House | Mension{
    return ;
}

const property = getProperty();

let bedRoomCount = (<Mension>property).bedRoom;


