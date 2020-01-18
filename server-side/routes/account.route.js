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
	})

	.delete((req, res) => {
		controller.deleteUserByUsername(req.params.username, res);
	});

router.route(`${config.ACCOUNT_PATH}/verify/:username&:password`)
	.get((req, res) => {
		controller.verifyPassword(req.params.username, req.params.password, res);
	});

module.exports = router;