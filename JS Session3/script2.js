//Call stack
function f1() {
  console.log("f1");
  let val = 5 * f2();
  console.log("f1");
  return val;
}

function f2() {
  console.log("f2");
  let val = (5 + 7) * f3();
  console.log("f2");
  return val;
}

function f3() {
  console.log("f3");
  return 15;
}

setTimeout(() => {
  console.log("setTimeOut");
}, 0);

let x = 6;
f1();

// setInterval(() => {
//   console.log(new Date());
// }, 1000);

//API Calls
//AJAX Async JavaScript and XML
const getUSAData = function () {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
  request.send();
  console.log("Start Test");
  request.addEventListener("load", function () {
    console.log("On Load");
    console.log(this.responseText);
  });
};

const getUSAData2 = function () {
  const request = fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
  request
    .then((data) => {
      data.json().then((d) => {
        console.log(d);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(1);
};

const getUSAData3 = async function () {
  const request = fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
  let dataPromise = await request;
  let data = await dataPromise.json();
  console.log(data);
  console.log(1);
};
//AJAX
//OOP and Modules
//Welcome to Angular
