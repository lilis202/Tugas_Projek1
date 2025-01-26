const db = require('../config/db')

const postTrackingLogs = async (data) => {
    console.log('Data diterima:', data);

    const { shipment_id, status, location } = data;

    if (!shipment_id || !status || !location ) {
        console.log('Data tidak lengkap:', { shipment_id, status, location });
        return ({ message: 'Data tidak lengkap' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO tracking_logs (shipment_id, status, location) VALUES (?, ?, ?)',
            [shipment_id, status, location]
        );
        return ({ 
            id: result.insertId,
            shipment_id: shipment_id,
            status: status,
            location: location
        });
    } catch (error) {
        console.log(error);
    }
}

const getAllTrackingLogs = async () => {
    const [result] = await db.query(
        'SELECT * FROM tracking_logs'
    )
    
    return result
}

const deleteTrackingLogsById = async (id) => {
    const [result] = await db.query(
        'DELETE FROM tracking_logs WHERE id=?', [id]
    )
    
    return result.affectedRows
}

const getTrackingLogsById = async (id) => {
    const [row] = await db.query("SELECT * FROM tracking_logs WHERE id=?", id)
    return row
}

const updateTrackingLogsById = async (id, status) => {
    const query = 'UPDATE tracking_logs SET status = ? WHERE id = ?'
    try {
        const [result] = await db.execute(query, [status, id])
        return result
    } catch (error) {
        throw new Error('Error updating tracking logs: ' + error.message)
    }
}

module.exports = {
    postTrackingLogs,
    getAllTrackingLogs,
    deleteTrackingLogsById,
    getTrackingLogsById,
    updateTrackingLogsById
}