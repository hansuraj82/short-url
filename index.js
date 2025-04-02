const express = require('express');
const app = express();
const db = require('./db');
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT;
const urlRoute = require('./Route/url.route');
app.get('/v1/api', (req,res)=> {
    res.status(200).json({msg: "home page"})
})
app.use('/v1/api',urlRoute);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

