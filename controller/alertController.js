const asyncHandler= require(
    'express-async-handler')


var Alert= require('../model/alert')


//create and save new alert
// @desc create alert
// @route POST /api/alert
// @access Private
const createAlert=asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('please add some fields')
    }

    const alert = await Alert.create({
        alert: req.body.alert,
        description: req.body.description,
        location: req.body.location,
    })

    res.status(200).json(alert)
})

// @desc get alert
// @route GET /api/alert
// @access Private
const getAlert=asyncHandler( async (req, res) => {
    const alert = await Alert.find()
    res.status(200).json(alert)
})

// @desc update alert
// @route PUT /api/alert/:id
// @access Private
const updateAlert=asyncHandler( async (req, res) => {

    const alert = await Alert.findById(req.params.id)

    if (!alert){
        res.status(400)
        throw new Error('alert not found')
    }

    const updatedAlert = await Alert.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedAlert)
})

// @desc DELETE alert
// @route DELETE /api/alert/:id
// @access Private
const deleteAlert = asyncHandler( async (req, res) => {

    const alert = await Alert.findByIdAndDelete(req.params.id)

    if (!alert) {
        res.status(400)
        throw new Error('alert not found')
    }
    else
    res.status(200).json({id : req.params.id})
})


module.exports={
    createAlert,
    getAlert,
    updateAlert,
    deleteAlert
}
