//connecting mongo db using mongoose
const mongoose = require('mongoose')

const connectDB = async () => {
    //to try to connect to mongodb with mongoose, connecting to MONGO_URI from env file
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
//catch any errors that come up from trying to connect 
    }catch (error) {
        console.log(error)
        //closing the process by exiting and passing in a 1
        process.exit(1)
    }
}

module.exports = connectDB