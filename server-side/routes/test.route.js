const router = require('express').Router();
const config = require('../config/config.js');

router.route(config.TEST_PATH)
    .get((_, res) => res.status(200).send('Testing'));

router.route(config.AWAKE_PATH)
	.get((_, res) => {
		console.log('Wake up the server');
		res.status(200).send('Wake up the server');
	});

module.exports = router;