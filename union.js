var score = 33;
score = "55";
var martins = { name: 'martins', id: 334 };
martins = { username: 'll', id: 334 };
// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId('3');
function getDbId(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
}
// Array
var data = [1, 2, 3, "4", true];
var seatAllotment;
seatAllotment = 'aisle';
