const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUser,

} = require('../controllers/users.controllers');
// const users = require('../controllers/users.controllers')
router.get('/', async (req, res) => {
    try {
        console.log("GET /users");
        const data = await getAllUsers();
        res.json(data);
    }
    catch (err) {
        console.log("Error retrieving users", err);
        res.status(500).json({ error: 'Failed to retrieve users', err });
    }
})
router.get('/:id', async (req, res) => {
    try {
        const data = await getUserById(req.params.id);
        res.json(data);
    }
    catch (err) {
        console.log("Error retrieving user", err);
        res.status(500).json({ error: 'Failed to retrieve user', err });
    }
})
router.post('/', async (req, res) => {
    try {
        const { user_name, user_interests } = req.body;
        await registerUser(user_name, user_interests);
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (err) {
        console.log("Error registering user", err);
        res.status(500).json({ error: 'Failed to register user', err });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { user_name, user_interests } = req.body;
        await updateUser(req.params.id, user_name, user_interests);
        res.status(200).json({ message: 'User updated successfully' });
    }
    catch (err) {
        console.log("Error updating user", err);
        res.status(500).json({ error: 'Failed to update user', err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (err) {
        console.log("Error deleting user", err);
        res.status(500).json({ error: 'Failed to delete user', err });
    }
})

module.exports = router;

