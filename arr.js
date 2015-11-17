  var arr = [
  {
    "id" : 1,
    "name" : "Bharat"
  },
  {
    "id" : 2,
    "name" : "Pavan"
  },
  {
    "id" : 3,
    "name" : "Sai"
  },
  {
    "id" : 4,
    "name" : "Vinod"
  }
];
var keys = Object.keys(arr[0]);
var length = keys.length;
var dvv = document.getElementById("mytable");
var tab = document.createElement("table");
var row = document.createElement("tr");
for(var i=0; i<length;i++){
  var col = document.createElement("th");
  var colText = document.createTextNode(keys[i]);
  console.log(keys[i]);


  col.appendChild(colText);
    row.appendChild(col);
}
/*
for(var i=0; i<arr.length; i++) {
  var row = document.createElement("tr");
  for(var j=0; j<length;j++){
    var col = document.createElement("td");
    var col = document.createTextNode(arr[j]);
    console.log(arr[i]);*/
  //}
    row.appendChild(col);
  //}
  tab.appendChild(row);
dvv.appendChild(tab);
