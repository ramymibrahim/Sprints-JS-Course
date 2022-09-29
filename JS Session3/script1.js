/* Objects */
/* this */

console.log(this);
var gvar = 5;
let gv = 1;
let lv = 2;

function test() {
  let gv = 3;
  let v = 4;
  console.log("Regular function");
  console.log(this);
}

let test1 = function () {
  let x = 6;
  console.log("Declared Function");
  console.log(this);
};

let test2 = () => {
  console.log("Arrow function");
  console.log(this);
};

let name = "Fawzy";
let age = 15;

let person = {
  name: "Ramy",
  age: 34,
  display: function () {
    console.log(`Name:${name}, age:${age}`);
    console.log(`Name:${this.name}, age:${this.age}`);
    console.log(this);
  },
};

let test8 = function () {
  let age = 26;
  let person2 = {
    name: "Ahmed",
    age: 33,
    display: () => {
      console.log(`Name:${name}, age:${age}`);
      console.log(`Name:${this.name}, age:${this.age}`);
      console.log(this);
    },
  };
  person2.display();
};

//call, bind ,apply
function addAge(stName) {
  console.log(this.age + 50);
  console.log(stName);
}

//Functions as callbacks and return functions
function calculateTotalPrice(value, taxCalculator) {
  console.log(value + taxCalculator(value));
}

let calculatorEG = function (value) {
  return value * 0.14;
};
let calculatorUSA = function (value) {
  return value * 0.2;
};

calculateTotalPrice(100, calculatorEG);
calculateTotalPrice(100, calculatorUSA);
calculateTotalPrice(100, function (value) {
  return value * 0.3;
});
calculateTotalPrice(100, (value) => {
  return value * 0.3;
});
calculateTotalPrice(100, (value) => value * 0.3);

//Array Functions
let arr = [1, 2, 3, 4, 5];
let arr1 = new Array(1, 2, 3, 4, 5, "Ramy", [1, 3]);
console.log(arr);
arr.push(6);
console.log(arr);
arr.splice(2, 1);
console.log(arr);
console.log(arr.slice(2, 6));
console.log(arr);
//multiply each item by 2
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }

let arr2 = arr.map(function (e) {
  return e * 2;
});
arr2 = arr.map((e) => {
  return e * 2;
});
arr2 = arr.map((e) => e * 2);
console.log(arr2);

let studentArrayOfObjects = [];
for (let i = 0; i < tasksArray.length; i++) {
  studentArrayOfObjects.push({
    name: tasksArray[i][0],
    email: tasksArray[i][1],
    taskName: tasksArray[i][2],
    taskOption: tasksArray[i][3],
    grade: Math.random() * 100,
  });
}
console.log(studentArrayOfObjects);
studentArrayOfObjects = tasksArray.map((e) => {
  return {
    name: e[0],
    email: e[1],
    taskName: e[2],
    taskOption: e[3],
    grade: Math.random() * 100,
    obj: { test: 1, t: 2 },
  };
});
console.log(studentArrayOfObjects);

let studentsGT50 = [];
for (let i = 0; i < studentArrayOfObjects.length; i++) {
  if (studentArrayOfObjects[i].grade >= 50) {
    studentsGT50.push(studentArrayOfObjects[i]);
  }
}
console.log(studentsGT50);
studentsGT50 = studentArrayOfObjects.filter((e) => e.grade >= 50);
console.log(studentsGT50);
let student = studentArrayOfObjects.find((e) => e.grade >= 50);
console.log(student);
let studentIndex = studentArrayOfObjects.findIndex((e) => e.grade >= 50);
console.log(studentIndex);
console.log(studentArrayOfObjects.concat(studentsGT50));
console.log(studentArrayOfObjects.every((e) => e.grade >= 50));
console.log(studentArrayOfObjects.some((e) => e.grade >= 50));

//FlatMap
console.log(
  studentArrayOfObjects.flatMap((e) => {
    e.name;
  })
);

[1, 2, 3, 4, 5].indexOf(3);
[1, 2, 3, 4, 5].includes(3); //No Coercing

console.log([1, 2, 3, 4, 5].join("-"));
console.log([1, 2, 3, 4, 5].join(","));
//Comparer
console.log([3, 1, 4, 5].sort());

//Find students with gmail account
console.log(
  studentArrayOfObjects.filter((e) => e.email.toLowerCase().includes("gmail"))
);
let grades = studentArrayOfObjects.map((e) => e.grade);
console.log(grades);

let a = 0;
for (let i = 0; i < grades.length; i++) {
  a += grades[i];
}
console.log(a / grades.length);

let total = grades.reduce((a, e) => (a += e));

console.log(total / grades.length);

//
let totalGradesGT50 = studentArrayOfObjects
  .filter((e) => e.grade >= 50)
  .map((e) => e.grade)
  .reduce((a, e) => (a += e));

console.log(totalGradesGT50);
//Set, Map

let studentEmails = new Set();
studentArrayOfObjects.forEach((e) => {
  studentEmails.add(e.email);
});
console.log(studentEmails);

let studentTaskCount = new Map();
studentArrayOfObjects.forEach((e) => {
  if (!studentTaskCount.has(e.email)) {
    studentTaskCount.set(e.email, 1);
  } else {
    studentTaskCount.set(e.email, studentTaskCount.get(e.email) + 1);
  }
});
console.log(studentTaskCount);
