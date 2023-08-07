const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    reference:{
        type: String,
        required:true
    },
    articleName:{
        type: String,
        required:true
    },
    pieceNumber:{
        type: Number,
        required:false,
    },
    yield:{
        type: String,
        required:false,
        default: 0
    },
})
const Productivity= mongoose.model('productivity',schema)
module.exports= Productivity
