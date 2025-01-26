const db = require('../config/db')

const postShipments = async (data) => {
    console.log('Data diterima:', data);

    const { user_id, status, origin, destination } = data;

    if (!user_id || !status || !origin || !destination) {
        console.log('Data tidak lengkap:', { user_id, status, origin, destination });
        return ({ message: 'Data tidak lengkap' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO shipments (user_id, status, origin, destination) VALUES (?, ?, ?, ?)',
            [user_id, status, origin, destination]
        );
        return ({ 
            id: result.insertId,
            user_id: user_id,
            status: status,
            origin: origin,
            destination: destination
        });
    } catch (error) {
        console.log(error);
    }
}

const getAllShipmets = async () => {
    const [result] = await db.query(
        'SELECT * FROM shipments'
    )
    
    return result
}

const deleteShipmentsById = async (id) => {
    const [result] = await db.query(
        'DELETE FROM shipments WHERE id=?', [id]
    )
    
    return result.affectedRows
}

const getShipmentsById = async (id) => {
    const [row] = await db.query("SELECT * FROM shipments WHERE id=?", id)
    return row
}

const updateShipmentsById = async (id, status) => {
    const query = 'UPDATE shipments SET status = ? WHERE id = ?'
    try {
        const [result] = await db.execute(query, [status, id])
        return result
    } catch (error) {
        throw new Error('Error updating shipments: ' + error.message)
    }
}

module.exports = {
    postShipments,
    getAllShipmets,
    deleteShipmentsById,
    getShipmentsById,
    updateShipmentsById
}