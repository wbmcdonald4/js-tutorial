
// single line comment

/*
multi line comment

console.log("hello world");

console.error("hello poppit");

console.warn("good-day");
*/

// var, let, const

// var is a globally defined variable
// let is a locally defined variable
// const is a constant which cannot be changed

// for (let i=0; i<10; i++) {
//     console.log(i)
// }

// String, Number, Boolean, null, undefined
/* const studentName = "William"
const studentRollNumber = 11
const isPresent = true
const fees = null
const age = undefined


console.log(typeof(studentName));
console.log(typeof(studentRollNumber));
console.log(typeof(isPresent));
console.log(typeof(fees));
console.log(typeof(age));*/

// String
// const greeting = "Hello World This is My Home";
// const subStr = greeting.substring(5, 11);
// console.log(subStr.toUpperCase());
// console.log(greeting.split(" ")[5]);

// Array
// const rollNumbers = [11,12,13,14, 15, 16, 17, 18, 11, 11, 11];
// console.log(rollNumbers);
// rollNumbers.push(14);
// console.log(rollNumbers);

// rollNumbers.pop();
// console.log(rollNumbers);


// rollNumbers[1] = 33;
// console.log(rollNumbers);

// rollNumbers[1] = 33;
// console.log(rollNumbers);

// console.log(rollNumbers.slice(0, 4));

// rollNumbers.unshift(100);
// console.log(rollNumbers);

// rollNumbers.sort( (a,b) => a-b);
// console.log(rollNumbers);

// const student = {
//     name: "john",
//     age: 21,
//     datesWhenAbsent: [1,2,3]
// }

// const students = [student, {
//     name: "bob",
//     age: 21,
//     datesWhenAbsent: [1,44,3]
// }]

// console.log(JSON.stringify(students))

// students=[]

// function addStudent(stuName, stuAge, stuDatesWhenAbsent, stuAddress){
//     const student = {
//         name: stuName,
//         age: stuAge,
//         datesWhenAbsent: stuDatesWhenAbsent,
//         address: stuAddress
//     }
//     students.push(student);
// }

// addStudent('John', 21, [1,2,3,4], {street: '22nd street', pincode: '12313', city: 'Jaipur'})
// addStudent('Bobby', 91, [2,3,4, 20], {street: '21st street', pincode: '12313', city: 'Toronto'})

// console.log(`Total Students ${students.length}`);
// console.log(JSON.stringify(students));

// Functions

// function sum(a,b){
//     return a+b;
// };

// shortcut for 1 line functions:

// const sum=(a,b)=>a+b;

// console.log(sum(3,3));

// Operators
// assignment op
// let x = 9;
// x = 12
// console.log(x);

// addition op
// const x = 9;
// const y = 13;
// let z = x + y;
// console.log(z);

// subtraction op
// const x = 9;
// const y = 13;
// let z = x - y;
// console.log(z);

// multiplication op
// const x = 9;
// const y = 13;
// let z = x * y;
// console.log(z);

// division op
// const x = 9;
// const y = 13;
// let z = x / y;
// console.log(z);

// Compound Assignment Operator
// let x = 9;
// x += 8;
// console.log(x)

// let x = 9;
// x *= 8;
// console.log(x)

// const x = 9;
// const y = "John";
// let z = x + y;
// console.log(z)

// Comparison Operators

// const x = 9;
// const y = 10;

// two "=" compares value
// console.log(x == y);

// three "=" compares value & data type
// console.log(x === y);

// two "!=" compares values
// console.log(x != y);

// "!==" compares value & data type
// console.log(x !== y);

// console.log(x <= y);

// Modulus operator
// let x = 18;
// let y = 9;

// console.log(x % y);

// increment operator - order of operations depends on where you put the operator (if after the variable it executes after the current line of code)
// console.log(x++);
// console.log(++y);

// console.log(x--);
// console.log(--y);

// const x = 19;
// const y = 19;

// If / Else Statements (conditional statements)

// if(x > y){
//     console.log('x is bigger');
// } else if(x < y){
//     console.log('y is bigger');
// } else {
//     console.log('y = x')
// }

// const doIHaveBreathingProblems = true;
// const haveILostSmell = true;
// const haveILostTaste = true;

// if (doIHaveBreathingProblems) {
//     if (haveILostSmell) {
//         if (haveILostTaste){
//             console.log("positive");
//         } else {
//             console.log("negative");
//         }
//     } else {
//         console.log("negative");
//     }
// } else {
//     console.log("negative");
// }

// if (doIHaveBreathingProblems || (haveILostSmell && haveILostTaste)) {
//     console.log("positive");
// } else {
//     console.log("negative");
// }

// Ternary Operator

// condition ? exprIfTrue : exprIfFalse

// const x = 11;
// const y = 12;

// x > y ? console.log("x is bigger") : x < y  ? console.log("y is bigger") : console.log('they are the same');

// Swith case

// const dayOfWeek = 7;
// switch(dayOfWeek){
//     case 1 : 
//         console.log("Monday");
//         break;
//     case 2 : 
//         console.log("Tuesday");
//         break;
//     case 3 : 
//         console.log("Wednesday");
//         break;
//     case 4 : 
//         console.log("Thursday");
//         break;
//     case 5 : 
//         console.log("Friday");
//         break;
//     case 6 : 
//         console.log("Saturday");
//         break;
//     case 7 : 
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid");
// }

// switch(dayOfWeek){
//     case 1 : 
//     case 2 : 
//     case 3 : 
//     case 4 : 
//     case 5 : 
//         console.log("Weekday");
//         break;
//     case 6 : 
//     case 7 : 
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid");
// }

// const students = ["John", "Harry", "Bobby", "Gimly", "Bear"];
// for (let x = 0; x < students.length; x++)    {
//     if (x===0) continue;
//     console.log(students[x]);
//     if (x===2) break;
// }

// const students = [
//     {
//         name: "John",
//         age: 12,
//         isPresent: true
//     },
//     {
//         name: "Bob",
//         age: 14,
//         isPresent: false
//     },
//     {
//         name: "Cod",
//         age: 22,
//         isPresent: true
//     },
//     {
//         name: "Cowface",
//         age: 19,
//         isPresent: true
//     },
//     {
//         name: "CheesePie",
//         age: 32,
//         isPresent: false
//     },
// ]

// for (let student of students) {
//     console.log(student)
// }


// const student = {
//             name: "Bob",
//             age: 25,
//             datesWhenAbsent: [1,2,3,4],
//             address: {street: '22nd street', pincode: '12313', city: 'Jaipur'}
//         }

// for (let prop in student) {
//     console.log(`${prop} : ${student[prop]}`);
// }

// forEach Method
// students.forEach(function (student) {
//     console.log(student.name);
// })

// Array Functions

// const studentNames = students.map(function (student){
//     return student.name;
// });

// console.log(studentNames)

// const absentStudents = students.filter(function (student){
//     return student.isPresent === true;
// }).map(function (student){
//     return student.name;
// });

// const absentStudents = students.filter((student) => student.isPresent === true).map((student) => student.name);

// const result = studentNames.filter(name => name.length != 3);

// console.log(absentStudents)

// ES6 Spread Syntax
// const class2020 = [
//     {
//         name: "John",
//         age: 12,
//         isPresent: true
//     },
//     {
//         name: "Bob",
//         age: 14,
//         isPresent: false
//     },
//     {
//         name: "Cod",
//         age: 22,
//         isPresent: true
//     },
//     {
//         name: "Cowface",
//         age: 19,
//         isPresent: true
//     },
//     {
//         name: "CheesePie",
//         age: 32,
//         isPresent: false
//     },
// ]

// const class2021 = [
//     {
//         name: "Legalas",
//         age: 19,
//         isPresent: true
//     }
// ]

// for combining two arrays
// const totalStudents = [...class2020, ...class2021];

// console.log(totalStudents);

// destructing
// const [j, a, g] = totalStudents;

// const stu1 = j;
// const stu2 = a;

// console.log(stu1);
// console.log(stu2);

//  combining two objects
// const studentDouble = {...stu1, ...stu2, name: "Clark", age: 23};
// console.log(studentDouble);

// const {name, age, isPresent} = studentDouble;

// console.log(name);
// console.log(age);
// console.log(isPresent);

// diff between object (dict) and JSON object is that json keys are in quotes

// JSON is a standardized data format which allows data to be passed between different programming languages

// JS Object
// const student = {
//         name: "Legolas",
//         age: 19,
//         isPresent: true
//     };

// JSON.stringify (converts JS object to a JSON string)
// console.log(JSON.stringify(student));

// JSON String
// const studentJSON = '{"name":"Legolas","age":19,"isPresent":true}';

// JSON.parse (converts a JSON string to a JS object)
// console.log(JSON.parse(studentJSON));

// const name = new String("John");    
// console.log(name);

// function Student(studentName, studentDob, studentSection){
//     this.name = studentName;
//     this.dob = studentDob;
//     this.section = studentSection;
// }

// Student.prototype.greet = function (){
//     console.log(`Hello ${this.name}, you were born on ${this.dob}`)
// }

// Student.prototype.getAge = function () {
//     const dob = new Date(this.dob);
//     const diff = Math.abs(new Date() - dob)/(1000*60*60*24);
//     return Math.floor(diff/365)
// }

// const student1 = new Student("John", "1990-02-11", "A2002")
// const student2 = new Student("Bob", "2000-01-01", "B2002")
// console.log(student1)
// console.log(student2)

// student2.greet();
// console.log(student1.getAge());

// Object Oriented Programming - classes

// class Student{
//     constructor(studentName, studentDob, studentSection){
//         this.name = studentName;
//         this.dob = studentDob;
//         this.section = studentSection;
//     }
//     greet = function (){
//         console.log(`Hello ${this.name}, you were born on ${this.dob}`)
//     }
    
//     getAge = function () {
//         const dob = new Date(this.dob);
//         const diff = Math.abs(new Date() - dob)/(1000*60*60*24);
//         return Math.floor(diff/365)
//     }
// }

// const stu1 = new Student("John", "2002-01-01", "E200")
// const stu2 = new Student("Chris", "1992-01-01", "E400")

// console.log(stu1)
// console.log(stu2)

// console.log(document.querySelectorAll(".gay")[0].value);