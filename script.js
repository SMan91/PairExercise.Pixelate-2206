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

for (let i = 0; i < 3; i++) {
  makeRow(20);
  console.log("Running");
}
