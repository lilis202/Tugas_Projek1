const userModel = require('../models/user.models')

const userRegistration = async (req, res) => {
    const data = req.body

    try {
        const register = await userModel.userRegistration(data)

        if (register) {
            return res.status(200).send({ register })
        }

        return res.status(400).send({ message: 'Registration failed' })

    } catch (error) {
        res.status(400).send({ message: 'Erorr to add user'})
    }
}

const userLogin = async (req, res) => {
    const data = req.body

    try {
        const login = await userModel.userLogin(data)

        if (login) {
            return res.status(200).json({ login })
        }
        
        return res.status(400).send({ msg: 'Login Failed' })

    } catch (error) {
        console.log(error)
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await userModel.getAllUser()

        if (!users) {
            return res.status(400).json({ message: 'Users not found' })
        }

        return res.status(200).send({ users })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const users = await userModel.deleteUserById(req.params.id)

        if (!users) {
            return res.status(400).json({ message: 'Users not found' })
        }

        return res.status(200).send({ message: 'Delete user sukses' })
    } catch (error) {
        return res.status(400).send({ message: error })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id)
        if (user.length > 0) {
            res.status(200).json({ user })
        }
        else {
            res.status(500).json({ message: 'User Not Found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get User' })
    }
}

const updateNameUserById = async (req, res) => {
    const { id } = req.params
    const {name} = req.body
    console.log('id, data', id, name)

    try {
        const add = await userModel.updateNameUserById(id, name)
        if (add) {
            return res.status(200).json({ message: 'Update name sukses' })
        }
        return res.status(400).send({ msg: 'Update name Failed' })

    } catch (eror) {
        console.log(eror);
    }
}

module.exports = {
    userRegistration,
    userLogin,
    getAllUser,
    deleteUserById,
    getUserById,
    updateNameUserById
}