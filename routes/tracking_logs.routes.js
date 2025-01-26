const tracking_logsController = require('../controllers/tracking_logs.controller')

const userAuth = require('../middlewares/user-auth')

const express = require('express');
const router = express.Router();

router.post('/trackinglogs', userAuth, tracking_logsController.postTrackingLogs)
router.get('/trackinglogs', userAuth, tracking_logsController.getAllTrackingLogs)
router.delete('/trackinglogs/:id', userAuth, tracking_logsController.deleteTrackingLogsById)
router.get('/trackinglogs/:id', userAuth, tracking_logsController.getTrackingLogsById)
router.put('/trackinglogs/:id', userAuth, tracking_logsController.updateTrackingLogsById)

module.exports = router