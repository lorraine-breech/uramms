const express = require('express');
const router = express.Router();

const StudentsController = require('../controllers/students');

router.get('/', StudentsController.students_get_all);
router.get('/:studentId', StudentsController.students_get_student);
router.post('/', StudentsController.students_create_student);
router.patch('/:studentId', StudentsController.students_patch_student);
router.delete('/:studentId', StudentsController.students_delete_student);

module.exports = router;