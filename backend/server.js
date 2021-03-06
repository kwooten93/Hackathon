const express = require('express')
//for environment variables, config allows to create file for env variables
require('dotenv').config()
//from documentation: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors")
//Accessing port variable in env available but also using or 5000 if this isn't found
const port = process.env.port || 5000

const app = express()
app.use(cors('*'))
const connectDB = require('./config/db')

//running connectDB function from config to connect to mongodb
connectDB()

//parser for raw json
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//for the routes used with / the main item page
var itemRouter = require('./routes/itemRoutes');
app.use('/', itemRouter);

app.listen(port, () => console.log(`Server started on port ${port}`))