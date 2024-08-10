'use strict'

const tableSize = 10;
const table = document.getElementById('createTable');

for (let i = 1; i <= tableSize; i++) {
    const row = document.createElement('tr');

    for (let j = 1; j <= tableSize; j++) {
        const cell = document.createElement(i === 1 || j === 1 ? 'th' : 'td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }
    table.appendChild(row);
}