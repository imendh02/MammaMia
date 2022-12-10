const express = require('express');
const resController = require('../controllers/reservation');

const router = express.Router();

router.post('/', resController.addRes);

module.exports = router;
