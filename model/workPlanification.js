const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    job:{
        type: String,
        required:true
    },
    plan:{
        type: String,
        required:true
    },
    identity:{
        type: String,
        required:false,
    },
})
const WorkPlanification= mongoose.model('workPlanification',schema)
module.exports= WorkPlanification
