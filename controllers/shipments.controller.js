const shipmentsModel = require('../models/shipments.models')

const postShipments = async (req, res) => {
    const data = req.body

    try {
        const shipments = await shipmentsModel.postShipments(data)

        if (shipments) {
            return res.status(200).send({ shipments })
        }

        return res.status(400).send({ message: 'Add shipments failed' })

    } catch (error) {
        res.status(400).send({ message: 'Error to add shipments'})
    }
}

const getAllShipmets = async (req, res) => {
    try {
        const shipments = await shipmentsModel.getAllShipmets()

        if (!shipments) {
            return res.status(400).json({ message: 'Shipments not found' })
        }

        return res.status(200).send({ shipments })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const deleteShipmentById = async (req, res) => {
    try {
        const shipment = await shipmentsModel.deleteShipmentsById(req.params.id)

        if (!shipment) {
            return res.status(400).json({ message: 'Shipment not found' })
        }

        return res.status(200).send({ message: 'Delete shipment sukses' })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const getShipmentsById = async (req, res) => {
    try {
        const shipment = await shipmentsModel.getShipmentsById(req.params.id)
        if (shipment.length > 0) {
            res.status(200).json({ shipment })
        }
        else {
            res.status(500).json({ message: 'Shipment Not Found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error get shipment' })
    }
}

const updateShipmentsById = async (req, res) => {
    const { id } = req.params
    const { status, location, contact_number } = req.body

    try {
        const add = await shipmentsModel.updateShipmentsById(id, status, location, contact_number)
        if (add) {
            return res.status(200).json({ message: 'Update shipment sukses' })
        }
        return res.status(400).send({ msg: 'Update shipment failed' })

    } catch (eror) {
        console.log(eror);
    }
}

module.exports = {
    postShipments,
    getAllShipmets,
    deleteShipmentById,
    getShipmentsById,
    updateShipmentsById
}