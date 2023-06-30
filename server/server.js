const express = require('express');
const app = express();
const config = require('./config');
const morgan = require('morgan');
const router = require('./routes');

app.use(morgan('dev'));
app.use('/api', router);
app.use(express.json());

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})