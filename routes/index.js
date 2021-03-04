// Get all of our tasks
var tasks = require('../tasks.json');

exports.view = function(request, response){
	response.render('index', tasks);
};
