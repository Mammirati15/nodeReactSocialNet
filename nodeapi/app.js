const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Yo whats up from Matt A")
})

const port = 8080
app.listen(port, () => {console.log(`A Node Js api is listening on port: ${port}`)})