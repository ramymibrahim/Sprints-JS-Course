//Null Values (Coercing) 0,'',undefined,null,NaN, false
const validateValues = function () {
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  if (
    !quantity ||
    !price ||
    isNaN(Number(quantity)) ||
    isNaN(Number(price)) ||
    quantity < 1 ||
    price < 1
  ) {
    alert("Please enter a valid values");
  }
  console.log(calculateTax(Number(price)));
  console.log(calculateTax(Number(price), 0.2));
};

const calculateTax = function (value, tax = 0.14) {
  // if (tax == undefined) {
  //   tax = 0.14;
  // }

  //|| , &&  for all false values
  //tax = tax || 0.14;
  //?? (Nullish coalescing operator) null , undefined
  tax = tax ?? 0.14;
  console.log(value * tax + value);
};
let studentData = {
  name: "Ibrahim",
  age: 25,
  address: {
    street: "Street 14",
    buildingNo: 20,
  },
};

let studentData2 = {
  name: "Ibrahim",
  age: 25,
  address: {
    buildingNo: 20,
  },
};

let studentData3 = {
  name: "Ibrahim",
  age: 25,
};

//? Optional Chaining
let street = studentData.address.street;
console.log(street);
street = studentData2.address.street;
console.log(street);
street = studentData3?.address?.street;
console.log(street);
//Spread operator ... object copying
let { name, age, x } = { ...studentData3 };
console.log(name);
console.log(age);

let arr = [1, 2, 3];
let [num1, num2] = [...arr];
console.log(num1);
console.log(num2);

//Optional Parameters
const calculateVAT = function (value, tax = 0.14) {
  console.log(value * tax + value);
};
