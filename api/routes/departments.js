const express = require('express');
const router = express.Router();

const DepartmentsController = require('../controllers/departments');

router.get('/', DepartmentsController.departments_get_all);
router.get('/:departmentId', DepartmentsController.departments_get_department);
router.post('/', DepartmentsController.departments_create_department);
router.patch('/:departmentId', DepartmentsController.departments_patch_department);
router.delete('/:departmentId', DepartmentsController.departments_delete_department);

module.exports = router;
