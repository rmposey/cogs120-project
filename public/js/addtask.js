'use strict'
// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// var jsonData = JSON.parse('../../data.json');
var data = require("../tasks.json");
console.log(data);
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Create a new list item when clicking on the "Add" button
function addTask() {
  var li = document.createElement("li");
  var activityName = document.getElementById("activity-name").value;
  var deadline = document.getElementById("activity-deadline").value;

  data.tasks.push({
  	name: activityName,
  	category: "Education",
  	deadline: deadline,
  	completed: false
  });
  jsonData = JSON.stringify(data);
}