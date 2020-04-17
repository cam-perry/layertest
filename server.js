const express = require("express")

const app = express()

app.get('/st', (req, res) => res.send("ok"))

app.get("/", (req, res) => res.send(`
	<html>
	<head>
	<title>Layerci Test Server</title>
	</head>
	<body>
	<h1>Hello</h1>
	<br/>
	<p>If this is showing, it worked!</p>
	</body>
	</html>
	`))

app.listen(8000, () => {
   console.log("We're up on :8000")
})
