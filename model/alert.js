const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    alert:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:false,
    }
})
const Alert= mongoose.model('alert',schema)
module.exports= Alert
