// Interfaces - describe the structure of the object

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Aleks',
  age: 38,
  greet(phrase: string) {
      console.log(phrase + ' ' + this.name)
  }
};

user1.greet('Hi there!');

// why Interface not Custom Type
// is clearer to defined structure of the object
// you can implement interface in to the class
// example

interface SaySomethingTo {
    name: string;
    // name property also could be readonly that will allow as protect
    // ourselves if it is needed that name could set only once
    greet(phrase: string): void;
}

// class can have more than one Interface
// and of course class could have his own properties

class Person1 implements SaySomethingTo {
    name: string;
    age = 38;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string){
        console.log(phrase + ' ' + this.name + ' you are ' + this.age )
    }
}

let user2: SaySomethingTo;
user2 = new Person1('Tomas');
user2.greet('Hi there!');
console.log(user2);

// with Interfaces, we can be sure if object created with interface
// that object will have all properties and methods what described in interface


// Extending Interfaces
interface Named {
    readonly name: string;
}

// we can extend more than one interface
interface Quited extends Named {
    quit(quitText: string): void;
}

class WorkerQ implements Quited {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    quit(quitText: string) {
        console.log(`Yes ${this.name} Word to you: ${quitText}`)
    }
}

let worker: Quited;
worker = new WorkerQ('Kristjan');
worker.quit('Thank to all the people in the world!')


// Interfaces as Functions Types

// just to recap
// custom type for function
type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1:  number, n2: number) => {
    return n1 + n2;
};
console.log(add(2,3))

// but also it is possible to use Interface but not common practise
interface AddFn2 {
    (a: number, b: number): number;
}
let add2: AddFn2;
add2 = (n1:  number, n2: number) => {
    return n1 + n2;
};
console.log(add2(2,3))



// Optional property or methods use ?

// Extending Interfaces
interface Named1 {
    readonly name?: string;

//    optional property or method
    outputName?: string;
//    it might exist might not
}

// we can extend more than one interface
interface Quited1 extends Named1 {
    quit(quitText: string): void;
}

class WorkerQ1 implements Quited1 {
    name?: string;
    constructor(name?: string) {

    //    but we also can specify default value
    // constructor(name: string = 'Jony') {
        if (name) {
            this.name = name;
        }
    }
    quit(quitText: string) {
        if (this.name) {
            console.log(`Yes ${this.name} Word to you: ${quitText}`)
        } else {
            console.log('Hi!')
        }
    }
}

let worker1: Quited1;
worker1 = new WorkerQ1();
worker1.quit('Thank to all the people in the world!')
