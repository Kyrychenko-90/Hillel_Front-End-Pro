const table = document.createElement("table");
table.classList.add("tableHome");

for(let i = 0; i < 10; i++) {
    const trTable = document.createElement("tr");
    trTable.classList.add("tableHomeTr");
    for(let j = 0; j < 10; j++) {
        const tdTable = document.createElement("td");
        tdTable.classList.add("tableHomeTd")
        trTable.appendChild(tdTable);
    }
    table.appendChild(trTable);
}
document.body.appendChild(table);

const numberCounter = document.querySelectorAll(".tableHomeTd");
let counter = 1;
numberCounter.forEach((td) => {
    td.textContent += counter;
    counter++;
})