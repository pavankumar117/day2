var dyn = document.getElementById("mytable");//getting element by value of DIV
var tab = document.createElement("table");//creating the table
tab.setAttribute("border","1");
var row = document.createElement("tr");//table row
row.setAttribute("bgcolor","green");
var col = document.createElement("td");// table data
var colText =  document.createTextNode("Name");// table data value
col.setAttribute("id","c");
col.setAttribute("class","data");
col.setAttribute("aligen","center");//attricutes
col.appendChild(colText);
var col1 = document.createElement("td");
var col1Text = document.createTextNode("Area");
col1.setAttribute("class","data")
col1.setAttribute("align","center");
col1.appendChild(col1Text);
var col2 = document.createElement("td");
var col2Text = document.createTextNode("contact No");
col2.appendChild(col2Text);//appending value of td into td
col2.setAttribute("class","data");
row.appendChild(col);//appending table data into table row
row.appendChild(col1);
row.appendChild(col2)
tab.appendChild(row);//appending table row into table
//completion of first row
// creating second row
var row1 = document.createElement("tr");
row1.setAttribute("bgcolor","red")
var col3 = document.createElement("td");
var col3Text = document.createTextNode("Pavan");
col3.setAttribute("class","data");
col3.appendChild(col3Text);
var col4 = document.createElement("td");
var col4Text = document.createTextNode("Vijayawada");
col4.setAttribute("class","data");
col4.appendChild(col4Text);
var col5 = document.createElement("td");
var col5Text = document.createTextNode("7569009305");
col5.setAttribute("class","data");
col5.appendChild(col5Text);
row1.appendChild(col3);
row1.appendChild(col4);
row1.appendChild(col5);
tab.appendChild(row1);
//end of second row
dyn.appendChild(tab);// appending table into div
