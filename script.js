// Your code here
let table = document.querySelector("table");

function makeRow(num) {
  let tr = document.createElement("tr");
  for (let i = 0; i < num; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// for (let i = 0; i < 3; i++) {
//   makeRow(20);
//   console.log("Running");
// }

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
  makeRow(20);
});

table.addEventListener("click", function (e) {
  console.log("clicked!");
  let square = e.target;
  if (square.className === undefined || square.className === "") {
    square.className = "aquamarine";
  } else {
    square.className = "";
  }
});
