const express = require('express');
const router = express.Router();

const SuperUsersController = require('../controllers/SuperUsers');

router.get('/', SuperUsersController.superusers_get_all);
router.get('/:superuserId', SuperUsersController.superusers_get_superuser);
router.post('/', SuperUsersController.superusers_create_superuser);
router.patch('/:superuserId', SuperUsersController.superusers_patch_superuser);
router.delete('/:superuserId', SuperUsersController.superusers_delete_superuser);

module.exports = router;
