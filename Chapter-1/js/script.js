// Used to override the existing types of the elements
var userName = "Hamza";
// will cause error
// let countUser : number = <number>userName;
// Forced Type Assertion
var countUsers = userName;
// Prints name successfully
console.log(countUsers);
function getProperty() {
    return;
}
var property = getProperty();
var bedRoomCount = property.bedRoom;
