const express = require("express")
const path = require("path")

const db = require("./database")
const routes = require("./routes")

const app = express()

//database connection
db.connect()

//defining engine template
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//defining public files
app.use(express.static(path.join(__dirname, "public")))

//enable server to receive data via post requests (form)
app.use(express.urlencoded({extended: true}))

//defining routes
app.use("/", routes)

//404 error (not found)
app.use((req, res) => {
    res.send("404 - Not Found!")
})

//running server
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))