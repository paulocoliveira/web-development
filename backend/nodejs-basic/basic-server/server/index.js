const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
    if (request.url === '/'){
        fs.readFile('../client/index.html', function(error, content){
            response.end(content)
        })
    }

    if (request.url === '/status'){
        response.end("Status: ONLINE")
    }
})

server.listen(8080)
console.log("Server running at 8080 port!")