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

let color = "red";
let clicked = false;

let select = document.querySelector("select");
select.addEventListener("change", function (e) {
  color = e.target.value;
});

table.addEventListener("mousedown", function (e) {
  clicked = true;
});

table.addEventListener("mouseup", function (e) {
  clicked = false;
});

table.addEventListener("mouseover", function (e) {
  let square = e.target;
  if (clicked === true) {
    if (
      square !== document.querySelector("table") &&
      (square.className === undefined || square.className === "")
    ) {
      square.className = color;
    } else {
      square.className = "";
    }
  }
});
