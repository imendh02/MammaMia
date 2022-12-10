const express = require('express');
// import { getMenu } from '../controllers/menu';

const menu = require('../controllers/menu');

const router = express.Router();

router.get('/', menu.getMenu);

module.exports = router;
