const express = require('express');
const router = express.Router();

const CAPRequestsController = require('../controllers/caprequests');

router.get('/', CAPRequestsController.capRequests_get_all);
router.get('/:capRequestId', CAPRequestsController.capRequests_get_capRequest);
router.post('/', CAPRequestsController.capRequests_create_capRequest);
router.delete('/:capRequestId', CAPRequestsController.capRequests_delete_capRequest);

module.exports = router;
