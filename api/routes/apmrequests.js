const express = require('express');
const router = express.Router();

const APMRequestsController = require('../controllers/apmrequests');

router.get('/', APMRequestsController.apmRequests_get_all);
router.get('/:apmRequestId', APMRequestsController.apmRequests_get_apmRequest);
router.post('/', APMRequestsController.apmRequests_create_apmRequest);
router.delete('/:apmRequestId', APMRequestsController.apmRequests_delete_apmRequest);

module.exports = router;
