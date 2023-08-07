const mongoose = require('mongoose')

const connectDB= async ()=>{
    try {
         //console.log(`MongoDb Connected: ${process.env.MONGO_URI}`)
        const conn = await mongoose.connect('mongodb+srv://amani:qj7PxjHTzV0gGRMD@cluster0.wl01tna.mongodb.net/?retryWrites=true&w=majority')
        console.log(`MongoDb Connected: ${conn.connection.host}`)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}
module.exports= connectDB
