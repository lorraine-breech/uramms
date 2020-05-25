const express = require('express');
const router = express.Router();

const PMAccountsController = require('../controllers/panel-member-accounts');

router.get('/', PMAccountsController.pmAccounts_get_all);
router.get('/:pmAccountId', PMAccountsController.pmAccounts_get_pmAccount);
router.post('/', PMAccountsController.pmAccounts_create_pmAccount);
router.patch('/:pmAccountId', PMAccountsController.pmAccounts_patch_pmAccount);
router.delete('/:pmAccountId', PMAccountsController.pmAccounts_delete_pmAccount);

module.exports = router;