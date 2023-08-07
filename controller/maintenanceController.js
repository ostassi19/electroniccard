const asyncHandler= require(
    'express-async-handler')


var Maintenance= require('../model/maintenance')


//create and save new Maintenance
// @desc create Maintenance
// @route POST /api/maintenance
// @access Private
const createMaintenance=asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('please add some fields')
    }

    const maintenance = await Maintenance.create({
        reference: req.body.reference,
        exchangePiece: req.body.exchangePiece,
        interventionDate: req.body.interventionDate,
        affectedTask: req.body.affectedTask
    })

    res.status(200).json(maintenance)
})

// @desc get foladers
// @route GET /api/maintenance
// @access Private
const getMaintenance=asyncHandler( async (req, res) => {
    const maintenances = await Maintenance.find()
    res.status(200).json(maintenances)
})

// @desc update maintenance
// @route PUT /api/maintenance/:id
// @access Private
const updateMaintenance=asyncHandler( async (req, res) => {

    const maintenance = await Maintenance.findById(req.params.id)

    if (!maintenance){
        res.status(400)
        throw new Error('maintenance not found')
    }

    const updatedMaintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedMaintenance)
})

// @desc DELETE maintenance
// @route DELETE /api/maintenance/:id
// @access Private
const deleteMaintenances=asyncHandler( async (req, res) => {

    const maintenance = await Maintenance.findByIdAndDelete(req.params.id)

    if (!maintenance) {
        res.status(400)
        throw new Error('maintenance not found')
    }
    else {
        res.status(200).json({id : req.params.id})
    }
})


module.exports={
    createMaintenance,
    getMaintenance,
    updateMaintenance,
    deleteMaintenances
}
