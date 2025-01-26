const shipmentController = require('../controllers/shipments.controller')

const userAuth = require('../middlewares/user-auth')

const express = require('express');
const router = express.Router();

router.post('/shipments', userAuth, shipmentController.postShipments)
router.get('/shipments', userAuth, shipmentController.getAllShipmets)
router.delete('/shipments/:id', userAuth, shipmentController.deleteShipmentById)
router.get('/shipments/:id', userAuth, shipmentController.getShipmentsById)
router.put('/shipments/:id', userAuth, shipmentController.updateShipmentsById)

module.exports = router