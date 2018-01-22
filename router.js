'use strict';

var index = require('./routes/index');
var users = require('./routes/users');

module.exports = app => {
	app.use('/', index);
	app.use('/users', users);
}