const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => {console.log("DB Connected")})

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
})

//bring routes
const postRoutes = require("./routes/post")
const authRoutes = require("./routes/auth")


//middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use("/", postRoutes)
app.use("/", authRoutes)

const port = process.env.PORT || 8080;

app.listen(port, () => {console.log(`A Node Js api is listening on port: ${port}`)})