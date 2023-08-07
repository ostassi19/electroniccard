const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/user')

const protect = asyncHandler(async (req,res,next)=>{
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Get token from header
            token= req.headers.authorization.split(' ')[1]

            //verify token
            const decoded= jwt.verify(token,'abc123')

            //Get user from token
            req.user= await User.findById(decoded.id).select('_password')
            next()
        }
        catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }

        if (!token){
            res.status(401)
            throw new Error('Not authorized, no token')
        }
    }
})
module.exports={protect}
