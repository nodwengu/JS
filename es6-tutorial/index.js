

// var bigSister = "Buli";
// let msg = "I hope you are doing good!";
// const newMsg = "How is your mother doing";
// //newMsg = "";
// bigSister = "Zan";
// msg = "How are you";

// function greet() {
//    console.log(`Hello ${bigSister}`);
//    console.log(msg);
//    console.log(newMsg);
// }

// greet();

// const getPersonAge = (birthDate, currentDate) => {
//    let birthDateArr = birthDate.split("-");
//    let currentDateArr = currentDate.split("-");
//    let years = Number(currentDateArr[0]) - Number(birthDateArr[0]);
//    let months = Number(currentDateArr[1]) - Number(birthDateArr[1]);
//    console.log(years);
//    console.log(months);
//    // console.log("birthDateArr ", birthDateArr);
//    // console.log("currentDateArr ", currentDateArr);
   
//    return 3;
// }

// 37 + 0.5 + 27

// // const person = {
// //    name: 'thando',
// //    birthDate: "1983-06-27",
// //    currentDate: "2021-12-25",
// //    age: getPersonAge(this.birthDate, this.currentDate)
// // }


// //console.log(person);

// console.log(getPersonAge("1983-06-27", "2021-12-25"));

// ARROW FUNCTIONS
// const greet = () => "Hello, world!";

// const greetByName = (name) => `Hello, ${name}`;

// const getPerson = (name, age) => ({name: name, age: age});

// console.log(greetByName("Thabo"));
// console.log(getPerson("sizwe", 22));


// THIS KEYWORD IN ARROW FUNCTIONS

// const car = {
//    model: 'Fiesta',
//    manufacturer: 'Ford',
//    fullName: function() {
//       return `${this.manufacturer} ${this.model}`
//    }
// }

// const car = {
//    model: 'Fiesta',
//    manufacturer: 'Ford',
//    fullName: () => {
//       return `${this.manufacturer} ${this.model}`
//    }
// }

// console.log(car.fullName());

// let link = document.querySelector('.link');

// link.addEventListener('click', () => {
//    console.log("this on Arrow function ", this);
// });

// link.addEventListener('click', function() {
//    console.log("this on normal function ", this);
// });

// CLASSES

// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    greet = () => `Hello, I'm ${this.name} and I'm ${this.age} years old.`
// }

// const person1 = new Person("Thanduxolo", 20);
// console.log(person1.greet());

// // CLASS INHERITANCE

// class Teacher extends Person {

// }

// const teacher1 = new Teacher("Zanele", 25);
// console.log(`Teacher1 `, teacher1);
// console.log(teacher1.greet());


// GETTERS AND SETTERS
// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    set name(theName) {
//       this.name = theName;
//    }

//    get name() {
//       return this.name;
//    }

//    greet = () => `Hello, I'm ${this.name} and I'm ${this.age} years old.`
// }

// const person1 = new Person('Sizwe',10);
// console.log("Name: ", person.name);

// TEMPLATE LETERALS
// MULTILINE STRING

// let message1 = "The first msg...\nThe second msg...";
// console.log(message1);

// let message2 = `The first msg...
// The second msg...
// The third msg...`.trim();
// console.log(message2.trim());

// let sum = `Sum = ${1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9}`;
// console.log(sum);

// DESTRUCTURING ASSIGNMENT
const person = {
    firstName: "Linda",
    lastName: "Khumalo",
    age: 10
};

const students = [
    { firstName:'Vusi', lastName:'Vuswayo', age:20 }, 
    { firstName:'Gorge', lastName:'Smith', age:25 }, 
    { firstName:'Thoko', lastName:'Mandela', age:30 },
    { firstName:'James', lastName:'Bond', age:27 }
];

// const { firstName: theName, lastName: surname, age:age } = person;
// const info1 = `Name: ${theName}
// Surname: ${surname}
// Age: ${age}`;

// const [ first, second, third, fourth ] = students;

// const info2 = `First: ${first.firstName}
// Second: ${second.firstName}
// Third: ${third.firstName}`;

// console.log(`${info2} 
// Fourth: ${fourth.firstName}`);

// console.log("first: ", first);
// console.log("second: ", second);
// console.log("third: ", third);
// console.log("forth", fourth);

// students.forEach(student => {
//     console.log(student);
// });

// for(const stud of students) {
//     console.log(stud);
// }
// let counter = 0;

// for(const [index, value] of students.entries()) {
//     if(value.firstName == 'James') {
//         break;
//     }
//     counter += index; 
//     console.log(index);
//     console.log(value);
// }

// console.log(counter);

// PROMISES
let done = true;

let isDoneYet = new Promise( (resolve, reject) => {
    if(done) {
        const workDone = "Here is the thing I build.";
        resolve(workDone);
    } else {
        const why = "Been busy with other stuff.";
        reject(why);
    }
} );

const learners = new Promise( (resolve, reject) => {
    if(students.length > 0) {
        const list = students;
        resolve(list);
    } else {
        const list = [];
        reject(list);
    }
});

const checkIsDoneYet = () => {
    isDoneYet.then( (ok) => {
        console.log(ok);
    }).catch(err => {
        console.log(err);
    })
}

const getList = () => {
    learners.then(list => {
        console.log(list);
    }).catch(err => {
        console.log(err);
    });
}

// const asyncList = async() => {
//     try {
//         const result = await learners;
//         console.log(result[0].firstName);
//     } catch(err) {
//         console.log(err);
//     }
// }

// checkIsDoneYet();
// getList();
// asyncList()

// FETCH NEEDS TO BE TESTED ON A SERVER...

// NEW STRING METHODS
// let string = "hee!...";
// console.log(string.repeat(3)); 

// NEW OBJECT METHODS
// Object.is(a, b)
// Object, string, number, undefined, null, true, NaN
const stud1 = { name: 'Vusi', age: 20 };
const stud2 = stud1;
// const areTheyEqual = Object.is(stud1, stud2);
// console.log(areTheyEqual);

// Object.assign()
// console.log("Original stud1 = ", stud1);

// stud2.name = "Andre";
// console.log("stud1 = ", stud1);

const stud3 = Object.assign({}, stud1);
// stud3.name = "Thanduxolo";
// stud3.email = "t@gmail.com";
// console.log("stud1 = ", stud1);
// console.log("stud3 = ", stud3);
// console.log("\n");

const original = {
    name: 'Fiesta', 
    car: { color: 'blue' }
}
// console.log("original: ", original);

// const copy = Object.assign({}, original);
// console.log("copy: ", copy);
// console.log("\n");

// original.name = "Toyota";
// original.car.color = "Yellow";

// console.log("original: ", original);
// console.log("copy: ", copy);
// console.log("\n");

// const address = {
//     unit: 'NU1',
//     street: '1109',
// }

// const userInfo = Object.assign({}, stud1, address);
// console.log("User info: ", userInfo);

// THE SPREAD OPERATOR
const mathStud = [
    ...students, 
    { firstName:'Jimmy', lastName:'Bill', age:20 },
    { firstName:'John', lastName:'Rambo', age:18 }
];

// console.log("students: ", students);
// console.log("maths students: ", mathStud);
// console.log("\n");

const obj1 = {
    ...person,
    weght: "50 kg",
    email: "mail@gmail.com"
}

// console.log("person: ", person);
// console.log("new person: ", obj1);
// console.log("\n");

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...others] = numbers;
// console.log(others);

// const sum = (a, b, c, d, e) => a + b + c + d + e;
// console.log( "Sum = ", sum(...numbers) );
// console.log("\n");

// const { first1, second1, third1, ...others1} = {
//     first1: 1,
//     second1: 2,
//     third1: 3,
//     fourth1: 4,
//     fifth1: 5
// }

// console.log("first1: ", first1);
// console.log("third1: ", third1);
// console.log("others1: ", others1);

// const items = {first1, second1, third1, ...others1}
// console.log("all items: ",items);

const hrEmployees = [
    { name: 'Linathi', salary: 10000, dept: 'hr' },
    { name: 'Boy', salary: 20000, dept: 'hr' },
    { name: 'Marere', salary: 9000, dept: 'hr' }
];

const itEmployees = [
    { name: 'Nxinxi', salary: 15000, dept: 'it' },
    { name: 'Masi', salary: 22000, dept: 'it' },
];

const [ hrEmp1, hrEmp2, ...otherHrEmps] = hrEmployees;
const [ itEmp1, ...otherItEmps] = itEmployees;


// console.log("hrEmp2: ", hrEmp2);
// console.log("otherItEmps: ", otherItEmps);

const allEmpl = allEmployees(hrEmployees, itEmployees);
// console.log("allEmpl: ", allEmpl);
// console.log("\n");

// addBonus(allEmpl);
// console.log("allEmpl: ", allEmpl);



// First give bonuses based on how much you earn and the department you work on
// if department is HR and Salary is greater than 15000 add 70% of the salary ELSE
// add 90% of the salary

// For IT, add 50% if more than 20000 else add 90%
// Update salary for each employee
// Show updated list of employees with updated salaries
// show total of salaries + total for bonuses


// create a new list of all employees combined and calculate the total of end of year bonus
// The manager should be able to view a list of employees all, for finance, and for hr


// SET
// const greet = (name, set) => {
//     if (!set.has(name)) {
//         return `${name} is not available...`;
//     }
//     return `Hello, ${name}.`;
// }

// let nameSet = new Set();

// nameSet.add("John");
// nameSet.add("Mike");
// nameSet.add("Thando");

// console.log("nameSet: ", nameSet);
// console.log( greet("John", nameSet) );
// console.log("number of items: ", nameSet.size);
// console.log("\n");

// nameSet.delete("John");
// console.log( greet("John", nameSet) );
// console.log("nameSet: ", nameSet);
// console.log("number of items: ", nameSet.size);
// console.log("\n");

// console.log(`Looping through a set`);
// for (const name of nameSet) {
//     console.log(name);
// }

// for (const name of nameSet.keys()) {
//     console.log(name);
// }

// for (const name of nameSet.values()) {
//     console.log(name);
// }

// nameSet.forEach( name => console.log(name) );

// const setEntries = nameSet.entries();
// console.log(setEntries.next());

// console.log("\n");

//MAP
// const map = new Map();
// map.set('name', 'Fluffy');
// map.set('age', 3);
// map.set('weight', 20);

// console.log("map: ", map);
// console.log("age: ", map.get('age'));
// console.log("\n");

// map.delete('weight');
// console.log("map: ", map);
// console.log("name: ", map.get('name'));

// EXPONENTIATION OPERATOR
// console.log(`2 to the power 3 = ${2 ** 3}`);

// ESS2017
// STRING PADDING
let str = "test";
console.log("test: ", str);
console.log("str.padStart(10, 'abcd'): ", str.padStart(10, 'abcd'));
console.log("str.padEnd(10, 'abcd'): ", str.padEnd(10, 'abcd'));
console.log("\n");

// Object.Values()
console.log("Object.values(person): ", Object.values(person));
console.log("Object.values(students): ", Object.values(students));
console.log("\n")

// Object.entries()
console.log("Object.entries(person): ", Object.entries(person));
console.log("Object.entries(students): ", Object.entries(students));
console.log("\n");

// ASYNC FUNCTIONS
const doSomethingAsync = () => {
    return new Promise( (resolve) => {
        setTimeout( () => resolve("I did something"), 3000);
    });
}

const doSomething = async() => {
    console.log(await doSomethingAsync());
};

console.log('Before')
doSomething()
console.log('After')

console.log("\n");