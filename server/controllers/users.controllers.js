const query = require('../db/utils')

const getAllUsers = async () => {
    return await query('SELECT * FROM users')
}
const getUserById = async (id) => {
    return await query('SELECT * FROM users WHERE id = ?', [id])
}
const registerUser = async (user_interests, user_name) => {
    return await query('INSERT INTO users (user_interests, user_name) VALUES (?, ?)', [user_interests, user_name])
}
const updateUser = async (user_interests, user_name, id) => {
    return await query('UPDATE users SET user_interests = ?, user_name = ? WHERE id = ?', [user_interests, user_name, id])
}
const deleteUser = async (id) => {
    return await query('DELETE FROM users WHERE id = ?', [id])
}

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUser
    
}