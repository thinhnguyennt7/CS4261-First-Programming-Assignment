const router = require('express').Router();
const config = require('../../config/config.js');

router.route(config.TEST_PATH)
    .get((_, res) => {
        res.status(200).send('Testing');
    });

module.exports = router;