class Account {
	constructor(username, password, optional) {
		this.name = optional;
		this.username = username;
		this.password = password;
		this.dob = optional;
		this.phone = optional;
		this.email = optional;
	};
};

module.exports = Account;