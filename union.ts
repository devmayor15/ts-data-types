let score: number | string = 33;

score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let martins: User | Admin = {name: 'martins', id: 334}
martins = {username: 'll', id: 334}

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is ${id}`);
    
// }
getDbId(3);
getDbId('3');

function getDbId(id: number | string) {
    if(typeof id === 'string') {
        id.toUpperCase()
    }
    
}

// Array
const data: (string | number | boolean)[] = [1, 2, 3, "4", true]

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle'