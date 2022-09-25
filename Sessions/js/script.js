"use strict";
/*
var
let
const
*/
function showMessage() {
  //   let first_name = document.getElementById("first-name").value;
  //   let last_name = document.getElementById("last-name").value;

  let firstNumber = 5;
  let secondNumber = 12;
  //   console.log(first_name + " " + last_name);
  //   console.log(firstNumber + secondNumber);

  //   var age = 35;
  //   const screenSize = 800;
  //   console.log(age);
  //   console.log(screenSize);
  //   age = age + 5;
  //   console.log(age);
  //   screenSize = screenSize + 100;
  //   console.log(screenSize);

  let addition = firstNumber + secondNumber;
  document.getElementById("add").value = addition;
}

function add() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result = Number(firstNumber) + Number(secondNumber);
  document.getElementById("result").value = result;
}

function subtract() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result = Number(firstNumber) - Number(secondNumber);
  document.getElementById("result").value = result;
}
//boolean, string, number, undefined
var x;
/*
Arithmetic Operators
+ - * /
Assigment Operators
x=5;
x=x+3;
x=x+1;
x++;
x=x-1;
x--;
x+=3;
x*=5;
x=5%2;
Comparative Operators
x==5
x>6
x<6
x<=10
x>=10
x!=5
x===5
x!==5
Logical Operators
|| 
&&
!
*/
function pension() {
  let gender = document.getElementById("gender").value;
  let age = Number(document.getElementById("age").value);
  let result =
    (age >= 60 && gender === "female") || (age >= 65 && gender === "male");

  if (result) {
    alert("He/She Deserves Pension");
  } else {
    alert("He/She Does not Deserve Pension");
  }

  if ((age >= 60 && gender === "female") || (age >= 65 && gender === "male")) {
    alert("He/She Deserves Pension");
  } else {
    alert("He/She Does not Deserve Pension");
  }

  if (result) {
  }
}

function printGrade() {
  let grade = document.getElementById("grade").value;
  if (grade >= 90) {
    document.getElementById("print").innerHTML += "Excellent";
    console.log("Excellent");
  } else if (grade >= 70) {
    console.log("Very Good");
  } else if (grade >= 60) {
    console.log("Good");
  } else if (grade >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

function displayStudentTable() {
  document.getElementById("tbody").innerHTML +=
    "<tr><td>" +
    "1" +
    "</td><td>" +
    names[0] +
    "</td><td>" +
    grades[0] +
    "</td></tr>";
  document.getElementById("tbody").innerHTML +=
    "<tr><td>" +
    "2" +
    "</td><td>" +
    names[1] +
    "</td><td>" +
    grades[1] +
    "</td></tr>";
  document.getElementById("tbody").innerHTML +=
    "<tr><td>" +
    "3" +
    "</td><td>" +
    names[2] +
    "</td><td>" +
    grades[2] +
    "</td></tr>";
}

function displayStudentTableWithLoop() {
  for (let i = 0; i < names.length; i++) {
    document.getElementById("tbody").innerHTML +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      names[i] +
      "</td><td>" +
      grades[i] +
      "</td></tr>";
  }

  let password = "";
  while (password != "") {
    password = prompt("Please enter your password:");
  }
}

function displayStudentTableWithWhileLoop() {
  let i = 0;
  while (i < names.length) {
    document.getElementById("tbody").innerHTML +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      names[i] +
      "</td><td>" +
      grades[i] +
      "</td></tr>";
    i++;
  }
}

let names = ["Ramy", "Ibrahim", "Sayed"];
let grades = [70, 80, 90];

let students = [
  ["Ramy", "Ibrahim", 90, 34, true],
  ["Hamdy", "Sayed", 96, 30, true],
];

let studentsObjArr = [
  {
    firstName: "Ramy",
    lastName: "Ibrahim",
    grade: 90,
    age: 34,
    isMale: true,
  },
  {
    firstName: "Hamdy",
    lastName: "Sayed",
    grade: 96,
    age: 30,
    isMale: true,
  },
];

function fillTableWithObjects() {
  for (let i = 0; i < studentsObjArr.length; i++) {
    document.getElementById("tbody").innerHTML +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      studentsObjArr[i].firstName +
      " " +
      studentsObjArr[i].lastName +
      "</td><td>" +
      studentsObjArr[i].grade +
      "</td></tr>";
  }
}
//let students2
//JSON JavaScript Object Notation
/*
XML
<firstName>Ramy</firstName>
<lastName>Ibrahim</lastName>
 */
