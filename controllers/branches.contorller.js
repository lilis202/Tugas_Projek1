const branchesModel = require('../models/branches.models')

const postBranches = async (req, res) => {
    const data = req.body

    try {
        const branches = await branchesModel.postBranches(data)

        if (branches) {
            return res.status(200).send({ branches })
        }

        return res.status(400).send({ message: 'Add branches failed' })

    } catch (error) {
        res.status(400).send({ message: 'Error to add branches'})
    }
}

const getAllBranches = async (req, res) => {
    try {
        const branches = await branchesModel.getAllBranches()

        if (!branches) {
            return res.status(400).json({ message: 'Branches not found' })
        }

        return res.status(200).send({ branches })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const deleteBranchesById = async (req, res) => {
    try {
        const branches = await branchesModel.deleteBranchesById(req.params.id)

        if (!branches) {
            return res.status(400).json({ message: 'Branches not found' })
        }

        return res.status(200).send({ message: 'Delete branches sukses' })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const getBranchesById = async (req, res) => {
    try {
        const branches = await branchesModel.getBranchesById(req.params.id)
        if (branches.length > 0) {
            res.status(200).json({ branches })
        }
        else {
            res.status(500).json({ message: 'Branches Not Found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error get branches' })
    }
}

const updateBranchesById = async (req, res) => {
    const { id } = req.params
    const { name, location, contact_number } = req.body

    try {
        const add = await branchesModel.updateBranchesById(id, name, location, contact_number)
        if (add) {
            return res.status(200).json({ message: 'Update branches sukses' })
        }
        return res.status(400).send({ msg: 'Update branches failed' })

    } catch (eror) {
        console.log(eror);
    }
}

module.exports = {
    postBranches,
    getAllBranches,
    deleteBranchesById,
    getBranchesById,
    updateBranchesById
}