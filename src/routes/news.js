const express = require('express');
const router = express.Router();
const newsController = require('../app/Controller/NewsController');

router.use('/chi-tiet', newsController.detail);
router.use('/', newsController.index);

module.exports = router;
