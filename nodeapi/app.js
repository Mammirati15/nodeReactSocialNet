const express = require('express')
const app = express()

//bring routes
const { getPosts } = require("./routes/post")

app.get("/", getPosts)

const port = 8080
app.listen(port, () => {console.log(`A Node Js api is listening on port: ${port}`)})