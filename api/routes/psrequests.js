const express = require('express');
const router = express.Router();

const PSRequestsController = require('../controllers/psrequests');

router.get('/', PSRequestsController.psRequests_get_all);
router.get('/:psRequestId', PSRequestsController.psRequests_get_psRequest);
router.post('/', PSRequestsController.psRequests_create_psRequest);
router.delete('/:psRequestId', PSRequestsController.psRequests_delete_psRequest);

module.exports = router;
