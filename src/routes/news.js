const express = require('express');
const router = express.Router();
const newsController = require('../app/Controller/NewsController');

router.get('/chi-tiet', newsController.detail);
router.get('/', newsController.index);

module.exports = router;
