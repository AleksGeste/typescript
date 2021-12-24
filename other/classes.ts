console.log('...')

// creating class
// note abstract class can not be instantiated
abstract class Department {
    static fiscalYear = 2020;
    // we can simplify like this, to do so we need describe out property only in constructor

    // private readonly id: string;
    // public name: string;

    // here we need to write protected that we are able to access this property from extended classes
    // because if it would be private it will be only accessible from Department class
    protected employees: string[] = [];

//    constructor method
    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;

        //    to access static property from inside the class we need to do the following
        //     console.log(Department.fiscalYear)
    }

    // static method
    static createEmployee(name: string) {
        return {name: name}
    }

    // method
    // describe(this: Department) {
    //     // string literal is used
    //     console.log(`Department name is: ${this.name} and ID is: ${this.id}`);
    // }

    // abstract. To do so we need to add abstract word in from of the class Name and also
    // override this method in extended classes
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Inheritance
class ITDepartment extends Department {
    // private admins: string[];
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe(): void {
        console.log(`IT department with ID ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports available ...');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please provide a report ...');
        }
        this.addReport(value);
    }

    // Singleton - with that we can create only one instance of that class
    // to do so we need to add in front of constructor private
    // and now to create instance of that class we need to create static method getInstance()
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    // here we need to add instance at the beginning of the class
    // and then check if it exists return it if not create new
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }


    addEmployee(name: string) {
        if (name === 'Aleks') {
            console.log(`Worker with name: ${name} already exists`);
            return;
        }
        this.employees.push(name);
        console.log(`Worker with name: ${name} added successfully to the ${this.name} department`);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    describe(): void {
        console.log(`${this.name} department with ID ${this.id}`);
    }
}

// create Object | Instance
const itDepartment = new ITDepartment('d1', ['Aleks']);
console.log(itDepartment);
itDepartment.describe();

const employee1 = ITDepartment.createEmployee('Andrejs');
// console.log(`Employee1: ${employee1.name}`);
console.log(employee1, ITDepartment.fiscalYear);

itDepartment.addEmployee('Aleks');
itDepartment.addEmployee('Alesja');
itDepartment.printEmployeeInfo();

// but also we can add emp like this, and it is not good
// to fix that we need to add private in the Class employees property
// accounting.employees[2] = 'Akims';
// accounting.printEmployeeInfo();

// const accountingDepartment = new AccountingDepartment('d2', []);
// and now to create new Instance of accounting Department we need

const accountingDepartment = AccountingDepartment.getInstance();

// and if I will create another on that will be exacly the same
const accountingDepartment2 = AccountingDepartment.getInstance();

accountingDepartment2.addReport('shit report from instance2')


// use set method to pass value
accountingDepartment.mostRecentReport = 'This is my first report with set method';


// this line will throw error because no any reports yet
// console.log(accountingDepartment.mostRecentReport);

accountingDepartment.addReport('Something went wrong');
accountingDepartment.addReport('We fix all problems');

// use get method to receive value
console.log(accountingDepartment.mostRecentReport);

// use class method
accountingDepartment.printReports();

accountingDepartment.addEmployee('Aleks');
accountingDepartment.addEmployee('Taisija');
console.log(accountingDepartment);
accountingDepartment.describe();


accountingDepartment.printReports();


