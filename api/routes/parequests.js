const express = require('express');
const router = express.Router();

const PARequestsController = require('../controllers/parequests');

router.get('/', PARequestsController.paRequests_get_all);
router.get('/:paRequestId', PARequestsController.paRequests_get_paRequest);
router.post('/', PARequestsController.paRequests_create_paRequest);
router.patch('/:paRequestId', PARequestsController.paRequests_patch_paRequest);
router.delete('/:paRequestId', PARequestsController.paRequests_delete_paRequest);

module.exports = router;