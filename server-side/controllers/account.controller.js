const catchify = require('catchify');
const shortid = require('shortid');
const Account = require('../models/account.model.js');
const database = require('../config/database.js');
const config = require('../config/config.js');
const handleMessage = require('../services/reponse.service.js');


exports.getAllUsers = (async res => {
	const [err, data] = await catchify(database.ref(config.ACCOUNTS).once('value'));
	handleMessage.apiQueryResponse(err, data, res);
});


exports.getUserByUsername = (async (username, res) => {
	const [err, data] = await catchify(database.ref(config.ACCOUNTS).child(username).once('value'));
	handleMessage.apiQueryResponse(err, data, res);
})


exports.addNewUser = (async (object, res) => {
	const newUser = new Account(object.name,
		object.username,
		object.email,
		object.password,
		object.phone,
		object.dob
	);
	database.ref(config.ACCOUNTS).child(object.username).once('value').then(response => {
		if (response.val() === null) {
			database.ref(config.ACCOUNTS).child(object.username).set(newUser);
			return handleMessage.success('New data added', res);
		} else {
			return handleMessage.failure('Username already existed', res);
		}
	}).catch(err => {
		return handleMessage.error('Invalid reference on firebase');
	})
});


exports.updateUserByUsername = (async (username, object, res) => {
	database.ref(config.ACCOUNTS).child(username).once('value').then(response => {
		if (response.val() !== null) {
			database.ref(config.ACCOUNTS).child(username).update(object);
			return handleMessage.success('User updated', res);
		} else {
			return handleMessage.failure('Username does not exist', res);
		}
	}).catch(err => {
		return handleMessage.error('Invalid reference on firebase');
	});
});