const express = require('express');
const router = express.Router();

const CoursesController = require('../controllers/courses');

router.get('/', CoursesController.courses_get_all);
router.get('/:courseId', CoursesController.courses_get_course);
router.post('/', CoursesController.courses_create_course);
router.patch('/:courseId', CoursesController.courses_patch_course);
router.delete('/:courseId', CoursesController.courses_delete_course);

module.exports = router;
