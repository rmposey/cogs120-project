// Get all of our friend data
var tasks = require('../tasks.json');

exports.view = function(request, response){
	console.log(tasks);
	response.render('index', tasks);
};