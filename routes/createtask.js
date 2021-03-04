var data = require('../tasks.json');

exports.createtask = function (request, response) {
  var newTask = request.body
  console.log(newTask)

  data.tasks.push(newTask)
  for (var i = 0; i < data.tasks.length; i++){
    console.log(data.tasks[i])
  }

  response.render('index', data)
};
