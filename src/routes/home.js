const express = require('express');
const router = express.Router();
const homeController = require('../app/Controller/HomeController');

router.use('/', homeController.index);

module.exports = router;
