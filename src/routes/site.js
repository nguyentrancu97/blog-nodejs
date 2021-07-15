const express = require('express');
const router = express.Router();
const siteController = require('../app/Controller/SiteController');

router.use('/', siteController.index);

module.exports = router;
