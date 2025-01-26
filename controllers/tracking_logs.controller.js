const tracking_logsModel = require('../models/tracking_logs.models')

const postTrackingLogs = async (req, res) => {
    const data = req.body

    try {
        const tracking_logs = await tracking_logsModel.postTrackingLogs(data)

        if (tracking_logs) {
            return res.status(200).send({ tracking_logs })
        }

        return res.status(400).send({ message: 'Add tracking logs failed' })

    } catch (error) {
        res.status(400).send({ message: 'Error to add tracking logs'})
    }
}

const getAllTrackingLogs = async (req, res) => {
    try {
        const tracking_logs = await tracking_logsModel.getAllTrackingLogs()

        if (!tracking_logs) {
            return res.status(400).json({ message: 'Tracking Logs not found' })
        }

        return res.status(200).send({ tracking_logs })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const deleteTrackingLogsById = async (req, res) => {
    try {
        const tracking_logs = await tracking_logsModel.deleteTrackingLogsById(req.params.id)

        if (!tracking_logs) {
            return res.status(400).json({ message: 'Tracking logs not found' })
        }

        return res.status(200).send({ message: 'Delete tracking logs sukses' })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const getTrackingLogsById = async (req, res) => {
    try {
        const tracking_logs = await tracking_logsModel.getTrackingLogsById(req.params.id)
        if (tracking_logs.length > 0) {
            res.status(200).json({ tracking_logs })
        }
        else {
            res.status(500).json({ message: 'Tracking logs Not Found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error get tracking logs' })
    }
}

const updateTrackingLogsById = async (req, res) => {
    const { id } = req.params
    const { status } = req.body

    try {
        const add = await tracking_logsModel.updateTrackingLogsById(id, status)
        if (add) {
            return res.status(200).json({ message: 'Update tracking logs sukses' })
        }
        return res.status(400).send({ msg: 'Update tracking logs failed' })

    } catch (eror) {
        console.log(eror);
    }
}

module.exports = {
    postTrackingLogs,
    getAllTrackingLogs,
    deleteTrackingLogsById,
    getTrackingLogsById,
    updateTrackingLogsById
}