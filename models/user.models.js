const db = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRegistration = async (data) => {
    const { name, email, password } = data

    if ( !name || !email || !password) {
        return { message: 'email and password is required' }
    }

    try {
        const [user] = await db.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )

        if (user && user.length > 0) {
            return { message: 'email sudah ada yang memakai' }
        }

        const salt = 10
        const hash = await bcrypt.hash(password, salt)

        const [result] = await db.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hash]
        )

        return ({ 
            id: result.insertId,
            name: name,
            email: email,
            pass: hash
        })

    } catch (eror) {
        console.log(eror);
    }
}

const userLogin = async (data) => {
    const { email, password } = data

    if (!email || !password) {
        return { message: 'user name and password is required' }
    }

    try {
        const [result] = await db.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )

        if (result.length === 0) {
            return { message: 'invalid user name' }
        }

        const user = result[0]

        const isLogin = await bcrypt.compare(password, user.password)

        if (isLogin) {
            const payload = {
                id: user.id,
                email: user.email
            }

            const userToken = jwt.sign(payload, process.env.USER_JWT_SECRET, {expiresIn: '1h'})

            return {
                id: user.id,
                email: user.email,
                user_token: userToken
            }

        } else {
            return { message: 'Invalid password' }
        }

    } catch (error) {
        return { message: error }
    }
}

const getAllUser = async () => {
    const [result] = await db.query(
        'SELECT id, name, email, created_at FROM users'
    )
    
    return result
}

const deleteUserById = async (id) => {
    const [result] = await db.query(
        'DELETE FROM users WHERE id=?', [id]
    )
    
    return result.affectedRows
}

const getUserById = async (id) => {
    const [row] = await db.query("SELECT * FROM users WHERE id=?", id)
    return row
}

const updateNameUserById = async (id, name) => {
    const query = 'UPDATE users SET name = ? WHERE id = ?'
    try {
        const [result] = await db.execute(query, [name, id])
        return result
    } catch (error) {
        throw new Error('Error updating name: ' + error.message)
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