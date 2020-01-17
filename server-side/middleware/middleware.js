const router = require('express').Router();
const cors = require('cors');
const bodyParse = require('body-parser');

// Support for Cross-Origin Resource Sharing
router.use(cors());

// Support for Parsing JSON payload
router.use(bodyParse.json());
router.use(bodyParse.urlencoded({ extended: false }));

module.exports = router;