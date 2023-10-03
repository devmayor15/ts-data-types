// const user = {
//   name: "martins",
//   email: "martins@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = {name: 'martins', email: 'lol@gmail.com', isPaid: false}

// createUser(newUser);

// function createCourse(): {name: string, price: number} {
//   return {
//     name: 'reactjs',
//     price: 299
//   };
// }

// TYPE ALIASES

// type User = {
//     name: string,
//     email: string,
//     isActive: Boolean
// }

// function createUser(user: User): User{
//     return {name: '', email: '', isActive: true}
// }

// createUser({name: '', email: '', isActive: true})


// type Point = {
//     x: number;
//     y: number;
//   };
   
//   // Exactly the same as the earlier example
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number
}

let myUser: User = {
    _id: '1234',
    name: 'martins',
    email: 'lol@gmail.com',
    isActive: false,

}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
};

myUser.email = 'lmao@gmail.com'

export {};
