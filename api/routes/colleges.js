const express = require('express');
const router = express.Router();

const CollegesController = require('../controllers/colleges');

router.get('/', CollegesController.colleges_get_all);
router.get('/:collegeId', CollegesController.colleges_get_college);
router.post('/', CollegesController.colleges_create_college);
router.patch('/:collegeId', CollegesController.colleges_patch_college);
router.delete('/:collegeId', CollegesController.colleges_delete_college);

module.exports = router;
