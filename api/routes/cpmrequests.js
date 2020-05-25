const express = require('express');
const router = express.Router();

const CPMRequestsController = require('../controllers/cpmrequests');

router.get('/', CPMRequestsController.cpmRequests_get_all);
router.get('/:cpmRequestId', CPMRequestsController.cpmRequests_get_cpmRequest);
router.post('/', CPMRequestsController.cpmRequests_create_cpmRequest);
router.delete('/:cpmRequestId', CPMRequestsController.cpmRequests_delete_cpmRequest);

module.exports = router;
