const express = require('express')
//for environment variables, config allows to create file for env variables
const dotenv = require('dotenv').config()
//Accessing port variable in env available but also using or 5000 if this isn't found
const port = process.env.port || 3000
const app = express()

//parser for raw json
app.use(express.json())
//for the routes used with / the main item page
var itemRouter = require('./routes/itemRoutes');
app.use('/', itemRouter);

app.listen(port, () => console.log(`Server started on port ${port}`))