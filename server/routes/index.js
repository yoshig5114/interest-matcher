const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.write('Home for Interest Matcher');
    res.status(200);
    res.end();
})

module.exports = router;