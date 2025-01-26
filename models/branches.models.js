const db = require('../config/db')

const postBranches = async (data) => {
    console.log('Data diterima:', data);

    const { name, location, contact_number } = data;

    if (!name || !location || !contact_number ) {
        console.log('Data tidak lengkap:', { name, location, contact_number });
        return ({ message: 'Data tidak lengkap' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO branches (name, location, contact_number) VALUES (?, ?, ?)',
            [name, location, contact_number]
        );
        return ({ 
            id: result.insertId,
            name: name,
            location: location,
            contact_number: contact_number
        });
    } catch (error) {
        console.log(error);
    }
}

const getAllBranches = async () => {
    const [result] = await db.query(
        'SELECT * FROM branches'
    )
    
    return result
}

const deleteBranchesById = async (id) => {
    const [result] = await db.query(
        'DELETE FROM branches WHERE id=?', [id]
    )
    
    return result.affectedRows
}

const getBranchesById = async (id) => {
    const [row] = await db.query("SELECT * FROM branches WHERE id=?", id)
    return row
}

const updateBranchesById = async (id, name) => {
    const query = 'UPDATE branches SET name = ? WHERE id = ?'
    try {
        const [result] = await db.execute(query, [name, id])
        return result
    } catch (error) {
        throw new Error('Error updating name: ' + error.message)
    }
}

module.exports = {
    postBranches,
    getAllBranches,
    deleteBranchesById,
    getBranchesById,
    updateBranchesById
}