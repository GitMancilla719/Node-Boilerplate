const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const connectMongoDb = require('./config/connectMongoDb')
dotenv.config()

// MongoDB Connection
connectMongoDb() 

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('SERVER: 200'))