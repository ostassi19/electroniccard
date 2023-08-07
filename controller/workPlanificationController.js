const asyncHandler= require(
    'express-async-handler')


const WorkPlanification = require("../model/workPlanification");


//create and save new workPlanification
// @desc create workPlanification
// @route POST /api/workPlanification
// @access Private
const createWorkPlanification=asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('please add some fields')
    }

    const workPlanification = await WorkPlanification.create({
        job: req.body.job,
        plan: req.body.plan,
        identity: req.body.identity
    })

    res.status(200).json(workPlanification)
})

// @desc get workPlanification
// @route GET /api/workPlanification
// @access Private
const getWorkPlanification=asyncHandler( async (req, res) => {
    const workPlanification = await WorkPlanification.find()
    res.status(200).json(workPlanification)
})

// @desc update workPlanification
// @route PUT /api/workPlanification/:id
// @access Private
const updateWorkPlanification=asyncHandler( async (req, res) => {

    const workPlanification = await WorkPlanification.findById(req.params.id)

    if (!workPlanification){
        res.status(400)
        throw new Error('workPlanification not found')
    }

    const updatedWorkPlanification = await WorkPlanification.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedWorkPlanification)
})

// @desc DELETE workPlanification
// @route DELETE /api/workPlanification/:id
// @access Private
const deleteWorkPlanification = asyncHandler( async (req, res) => {

    const workPlanification = await WorkPlanification.findByIdAndDelete(req.params.id)

    if (!workPlanification) {
        res.status(400)
        throw new Error('workPlanification not found')
    }
    else
    res.status(200).json({id : req.params.id})
})


module.exports={
    createWorkPlanification,
    getWorkPlanification,
    updateWorkPlanification,
    deleteWorkPlanification
}
