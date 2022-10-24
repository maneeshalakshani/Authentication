const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}))

const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connected"))
.catch((error) => console.log("DB not Connected", error));

//route import
const auth = require('./routes/auth/authRoutes')

//routes
app.use('/auth', auth)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))