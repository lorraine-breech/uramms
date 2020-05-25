const express = require('express');
const router = express.Router();

const ProfessorsController = require('../controllers/professors');

router.get('/', ProfessorsController.professors_get_all);
router.get('/:professorId', ProfessorsController.professors_get_professor);
router.post('/', ProfessorsController.professors_create_professor);
router.patch('/:professorId', ProfessorsController.professors_patch_professor);
router.delete('/:professorId', ProfessorsController.professors_delete_professor);


module.exports = router;
