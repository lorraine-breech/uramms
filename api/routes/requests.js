const express = require('express');
const router = express.Router();

const RequestsController = require('../controllers/requests');

router.get('/', RequestsController.requests_get_all);
router.get('/:requestId', RequestsController.requests_get_request);
router.post('/', RequestsController.requests_create_request);
router.patch('/:requestId', RequestsController.requests_patch_request);
router.delete('/:requestId', RequestsController.requests_delete_request);

module.exports = router;
