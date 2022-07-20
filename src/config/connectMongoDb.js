const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectMongoDb = async () => {
    try {
        mongoose.connect(process.env.DB_URI)
        console.log('DB : OK')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongoDb