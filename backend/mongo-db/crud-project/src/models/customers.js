const mongoose = require("mongoose")

//defining schema
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model("customers", schema)

module.exports = Model