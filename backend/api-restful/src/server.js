const express = require("express")
const cors = require("cors")

const db = require("./database/db")
const routes = require("./routes/routes")

const app = express()

//database connection
db.connect()

//enable CORS

const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http:www.mytestapplication.com"
]

app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        //mobile app
        if (!origin){
            allowed = true
        }

        //servers
        if(!allowedOrigins.includes(origin)){
            allowed = false
        }

        callback(null, allowed)
    }
}))

//enable server to receive data via json
app.use(express.json())

//defining routes
app.use("/api", routes)

//running server
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))