const router = require('express').Router();
const catchify = require('catchify');
const config = require('../config/config.js');
const controller = require('../controllers/account.controller.js');

router.route(`${config.ACCOUNT_PATH}`)
	.post((req, res) => {
		controller.addNewUser(req.body, res);
	})

	.get((_, res) => {
		controller.getAllUsers(res);
	});


router.route(`${config.ACCOUNT_PATH}/:username`)
	.get((req, res) => {
		controller.getUserByUsername(req.params.username, res);
	})

	.put((req, res) => {
		controller.updateUserByUsername(req.params.username, req.body, res);
	});

module.exports = router;