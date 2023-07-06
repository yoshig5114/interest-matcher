const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');


router.get('/', (req, res) => {
    res.status(200);
    res.write('Home for Interest Matcher');
    res.end();
})
// router.get('/users', async (req, res) => {
//     console.log("GET /users");
//     try {
//         const data = await getAllUsers();
//         res.json(data);
//     }
//     catch (err) {
//         console.log("Error retrieving users", err);
//         res.status(500).json({ error: 'Failed to retrieve users', err });
//     }
// })
router.use('/users',userRoutes);


module.exports = router;