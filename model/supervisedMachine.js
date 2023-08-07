const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:false
    }
})
const SupervisedMachine= mongoose.model('supervisedMachine',schema)
module.exports= SupervisedMachine
