const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

//Defining Engine Template
app.set("view engine", "ejs")

//Defining static files - using template engine do not need to define static folder
//const staticFolder = path.join(__dirname, "views")
//const expressStatic = express.static(staticFolder)
//app.use(expressStatic)

//Defining public files
const publicFolder = path.join(__dirname, "public")
const expressPublic = express.static(publicFolder)
app.use(expressPublic)

//Enable server to receive data via posts (form)
app.use(express.urlencoded({extended: true}))

//Routes
app.get("/", (req, res) => {
    res.render("index",{
        title: "Digital Tech - Home"
    })
})

app.get("/posts", (req, res) => {
    res.render("posts",{
        title: "Digital Tech - Posts",
        posts: [
            {
                title: "News in tech world!",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis maxime delectus corrupti voluptate accusamus iure quae libero excepturi perspiciatis officiis, repellat magnam cupiditate reiciendis esse omnis temporibus exercitationem vitae.",
                stars: 1
            },
            {
                title: "Creating a server with node.js!",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis maxime delectus corrupti voluptate accusamus iure quae libero excepturi perspiciatis officiis, repellat magnam cupiditate reiciendis esse omnis temporibus exercitationem vitae."
            },
            {
                title: "Javascript is the most used programming language in the world!",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis maxime delectus corrupti voluptate accusamus iure quae libero excepturi perspiciatis officiis, repellat magnam cupiditate reiciendis esse omnis temporibus exercitationem vitae.",
                stars: 3
            }
        ]
    })
})

app.get("/posts-register", (req, res) => {
    const c = req.query
    res.render("posts-register",{
        title: "Digital Tech - Register Post",
        registered: c,
    })
})

app.post("/save-post", (req, res) => {
    const {title, text} = req.body

    const data = fs.readFileSync("./store/posts.json")
    const posts = JSON.parse(data)

    posts.push({
        title: title,
        text: text
    })

    const postsString = JSON.stringify(posts)

    fs.writeFileSync("./store/posts.json", postsString)

    res.redirect("/posts-register?c=1")
})


app.use((req, res) => {
    res.send("404 - Not found!")
})

//Running Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listinening on port ${port}.`))