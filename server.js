const express = require("express")

const app = express()

app.get('/st', (req, res) => res.send("ok"))

app.listen(8000, () => {
   console.log("We're up on :8000")
})
