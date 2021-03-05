'use strict'

// Create a new list item when clicking on the "Add" button
function addTask(id) {
  // console.log("connected")
  var li = document.createElement("li");
  var activityName = document.getElementById("activity-name").value;
  var deadline = document.getElementById("activity-deadline").value;
  var category = document.getElementById("activity-category").value;


  // console.log(li)
  // console.log(activityName)
  // console.log(deadline)
  // console.log(category)

  $.post('createtask', {id: Math.floor(Math.random() * Math.floor(1000)),
    name: activityName,
    category: category,
    deadline: deadline
  })

  alert("Task added!");
  document.getElementById("add-task-form").reset();
}
