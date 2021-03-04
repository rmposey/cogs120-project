// Get all of our friend data
var data = require('../tasks.json');

exports.view = function(request, response){
	response.render('addtask', data);
};

