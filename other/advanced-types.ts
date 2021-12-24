// Intersection types

// we could create this with interface
// but here we are usung type
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// Intersecting
type ElevateEmployee = Admin & Employee;

const el1: ElevateEmployee = {
    name: 'Aleks',
    privileges: ['full', 'superuser'],
    startDate: new Date()
}

type Combinable = string | number;
type  Numeric = number | boolean;

type Universal = Combinable & Numeric;


// Type Guards - idea or approach of checking type before using

// Function Overload
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string, b: string): string;

function add(a: Combinable, b: Combinable) {
//    type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// Function overloads helps here
const res = add('Aleks', ' Alesja');
// also, possible fix with type casting
// const res = add('Aleks', ' Alesja') as string;
console.log('Function overloads: ' + res)
console.log('Function overloads: ' + res.split( ' '))

// optional chaining
const fetchedUserData = {
    id: 'u1',
    name: ' Aleks',
    job: {
        title: 'CEO',
        description: 'My company'
    }
}

console.log(fetchedUserData?.job?.title)


// Nullish Coalescing
const userInput = null;

// fix but not perfect
// const storedData = userInput || 'DEFAULT';

// Coalescing operator
const storedData = userInput ?? 'DEFAULT';
console.log('storedData' + storedData);




// union type
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(e: UnknownEmployee) {
    console.log(e.name)
//    type guard
    if ('privileges' in e) {
        console.log(e.privileges)
    }
    if ('startDate' in e) {
        console.log(e.startDate)
    }
}

printEmployeeInfo(el1)
printEmployeeInfo({name: 'Alesja', startDate: new Date})

// instance of type guard

class Car {
    drive() {
        console.log('Driving ...')
    }
}

class Truck {
    drive() {
        console.log('Driving ...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ... ' + amount);
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
//    type guard
//    instanceof is working with classes not with interfaces
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)


// Discriminated Unions

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving speed is ... ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

// Type Casting
//one way
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// userInputElement.value = 'Hi there!';

// way two
const userInputElement1 = document.getElementById('user-input') as HTMLInputElement;
userInputElement1.value = 'Hi there!';

// Index Properties
interface ErrorContainer {
    // { email: 'Not a valid email', username: 'Must start with a character!' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
