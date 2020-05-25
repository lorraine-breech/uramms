const express = require('express');
const router = express.Router();

const StudiesController = require('../controllers/Studies');

router.get('/', StudiesController.studies_get_all);
router.get('/:studyId', StudiesController.studies_get_study);
router.post('/', StudiesController.studies_create_study);
router.patch('/:studyId', StudiesController.studies_patch_study);
router.delete('/:studyId', StudiesController.studies_delete_study);

module.exports = router;