const tableRow = document.getElementById('tableRow')

const newElement = document.createElement('td');
document.getElementById('tableRow').className = "newClass";
newElement.innerText = "Age";

tableRow.appendChild(newElement)
// document.getElementById('newElement').className = "newClass";