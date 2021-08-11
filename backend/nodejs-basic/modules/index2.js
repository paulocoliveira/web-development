const fs = require('fs')

fs.readFile('./customers.json', function(error, content){
    if(error){
        console.log("Ops, an error has occured!", error)
    }else{
        console.log(JSON.parse(content))
    }
})