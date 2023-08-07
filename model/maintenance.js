const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    reference:{
        type: String,
        required:true
    },
    exchangePiece:{
        type: String,
        required:true
    },
    interventionDate:{
        type: Date,
        required:false,
        default: Date.now
    },
    affectedTask:{
        type: Boolean,
        required:true,
        default: false
    },
})
const Maintenance= mongoose.model('maintenance',schema)
module.exports= Maintenance
