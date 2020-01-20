const authen = require('../services/authentication.service.js');

class Account {
	constructor(object) {
		this.name = (object.name) ? object.name : 'N/A';
		this.username = object.username;
		this.password = authen.decodePassword(object.password);
		this.dob = (object.dob) ? object.dob : 'N/A';
		this.phone = (object.phone) ? object.phone : 'N/A';
		this.email = (object.email) ? object.email : 'N/A';
	};
};

module.exports = Account;