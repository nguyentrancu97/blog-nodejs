const express = require('express');
const router = express.Router();
const CourseController = require('../app/Controller/CourseController');

router.get('/:slug', CourseController.show)
router.get('/', CourseController.index);

module.exports = router;
