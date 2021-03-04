'use strict'

function completeTask(id) {
  console.log('click registered');
  console.log(id);
  $.get('/index', markTaskAsComplete(id))
}

function markTaskAsComplete(id){
  console.log(id)
}
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
