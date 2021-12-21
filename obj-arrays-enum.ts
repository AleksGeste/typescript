// Object, array, enum, any

// explicit type assignments for object
const person: {
    name: string;
    age: number;
    // array of strings
    hobbies: string[];
    // tuple array with two elements
    role: [number, string]
} = {
// const person = {
    name: "Aleks",
    age: 38,
    hobbies: ["Sport", "Music"],
    role: [1, 'admin']
};

// typescript bug
// exception with tuples
person.role.push('user');

// typescript support
// gives error when tuple is described in object
// person.role[1] = 10;

// typescript support
// gives error because more elements then assigned
// person.role = [1, 'admin', 'user'];

let favActivities: string[];
favActivities = ["coffie", "salat"];
// let favActivities: any[];
// favActivities = ['coffie', 'salat', 1, false]

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}

console.log(person.name);
console.log(person.role);

// Custom Type - enum - is very good for roles
// Power of enum
// example

// enum Role { ADMIN, READ_ONLY, AUTHOR, SUBSCRIBER }

// can also start with other number, that will increment other numbers
// enum Role { ADMIN=5, READ_ONLY, AUTHOR, SUBSCRIBER }

// also, can have own numbers
// enum Role { ADMIN = 5, READ_ONLY = 10, AUTHOR = 69, SUBSCRIBER = 99 }

// and also, can be text or both
enum Role { ADMIN = 'Admin', READ_ONLY = 'Reader', AUTHOR = 'Author', SUBSCRIBER = 99 }

const user = {
    name: "Aleks",
    age: 38,
    hobbies: ["Sport", "Music"],
    role: Role.ADMIN
};

if (user.role == Role.ADMIN) {
    console.log(`Hi! ${user.name} you are our ${user.role}`)
}

// any type
let activities: any[];
activities = ['coffie', 'salat', 1, false]

// will be error
let activities1: string[];
// activities1 = ['coffie', 'salat', 1, false]

// also, will be error because is not array
// activities1 = 5;

/*
    Note - try to avoid anywhere it is possible
    because it is almost the same as pure JavaScript
    TypeScript compiler can't check anything
 */



