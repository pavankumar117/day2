var reg = document.getElementById('myTable');
var t = document.createElement('table');//creating table
var row = document.createElement('tr');//creating table row 1
var cell = document.createElement('td');
var cellText = document.createTextNode('coli');
cell.setAttribute('aligen','center');        //dosent work
cell.setAttribute('id', 'col1');
cell.setAttribute('class', 'col1');
cell.appendChild(cellText);
var cell2 = document.createElement('td');
var cellText2 = document.createTextNode('coli2');
cell2.setAttribute('aligen','center');        //dosent work
cell2.appendChild(cellText2);
row.appendChild(cell);
row.appendChild(cell2);
t.appendChild(row);
reg.appendChild(t);
