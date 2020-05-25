const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');

router.get('/', UsersController.users_get_all);
router.delete('/:userId', UsersController.users_delete_user);
router.post('/', UsersController.users_create_user);

router.post('/login', UsersController.users_login_user);


module.exports = router;
