console.log('Running');

const tabla = document.querySelector('#tabla');

const myTable = new Array();

for (let i = 1; i < 101; i++) {
  for (let j = 1; j < 101; j++) {
    if (i === 1) {
      myTable.push(j);
    } else {
      myTable.push(j * i);
    }
  }
}

let head = '<table>';
let body = '<tr>';
let rows = 1;
let myclass = '';
for (let j = 0; j < myTable.length; j++) {
  if (myTable[j] % 2 === 0) {
    myclass = 'even';
  } else {
    myclass = 'odd';
  }
  body += `<td class="${myclass}"> ${myTable[j]}</td>`;
  if (rows > 99) {
    body += '</tr>';
    rows = 0;
  }
  rows++;
}

tabla.innerHTML = head + body + '<table>';