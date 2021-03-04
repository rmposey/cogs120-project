'use strict'
// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// var jsonData = JSON.parse('../../data.json');

// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Create a new list item when clicking on the "Add" button
function addTask(id) {
  console.log("connected")
  var li = document.createElement("li");
  var activityName = document.getElementById("activity-name").value;
  var deadline = document.getElementById("activity-deadline").value;
  var category = document.getElementById("activity-category").value;


  console.log(li)
  console.log(activityName)
  console.log(deadline)
  console.log(category)

  $.post('createtask', {id: 1,
    name: activityName,
    category: category,
    deadline: deadline,
    completed: false})

  //
  //$.post('/index', )
  /*data.tasks.push({
  	name: activityName,
  	category: category,
  	deadline: deadline,
  	completed: false
  });*/
  //jsonData = JSON.stringify(data);
}
