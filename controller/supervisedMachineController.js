const asyncHandler= require(
    'express-async-handler')


var SupervisedMachine= require('../model/supervisedMachine')


//create and save new supervisedMachine
// @desc create supervisedMachine
// @route POST /api/supervisedMachine
// @access Private
const createSupervisedMachine=asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('please add some fields')
    }

    const supervisedMachine = await SupervisedMachine.create({
        name: req.body.name,
        message: req.body.message,
    })

    res.status(200).json(supervisedMachine)
})

// @desc get supervisedMachines
// @route GET /api/supervisedMachine
// @access Private
const getSupervisedMachine=asyncHandler( async (req, res) => {
    const supervisedMachines = await SupervisedMachine.find()
    res.status(200).json(supervisedMachines)
})

// @desc update supervisedMachine
// @route PUT /api/supervisedMachine/:id
// @access Private
const updateSupervisedMachine=asyncHandler( async (req, res) => {

    const supervisedMachine = await SupervisedMachine.findById(req.params.id)

    if (!supervisedMachine){
        res.status(400)
        throw new Error('supervisedMachine not found')
    }

    const updatedSupervisedMachine = await SupervisedMachine.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedSupervisedMachine)
})

// @desc DELETE supervisedMachine
// @route DELETE /api/supervisedMachine/:id
// @access Private
const deleteSupervisedMachines=asyncHandler( async (req, res) => {

    const supervisedMachine = await SupervisedMachine.findByIdAndDelete(req.params.id)

    if (!supervisedMachine) {
        res.status(400)
        throw new Error('supervisedMachine not found')
    }
    else
    res.status(200).json({id : req.params.id})
})

module.exports={
    createSupervisedMachine,
    getSupervisedMachine,
    deleteSupervisedMachines,
    updateSupervisedMachine
}
