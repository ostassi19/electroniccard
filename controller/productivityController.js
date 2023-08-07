const asyncHandler= require(
    'express-async-handler')


var Productivity= require('../model/productivity')


//create and save new productivity
// @desc create productivity
// @route POST /api/productivity
// @access Private
const createProductivity=asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('please add some fields')
    }

    const productivity = await Productivity.create({
        reference: req.body.reference,
        articleName: req.body.articleName,
        pieceNumber: req.body.pieceNumber,
        yield: req.body.yield
    })

    res.status(200).json(productivity)
})

// @desc get productivity
// @route GET /api/productivity
// @access Private
const getProductivity=asyncHandler( async (req, res) => {
    const productivity = await Productivity.find()
    res.status(200).json(productivity)
})

// @desc update productivity
// @route PUT /api/productivity/:id
// @access Private
const updateProductivity=asyncHandler( async (req, res) => {

    const productivity = await Productivity.findById(req.params.id)

    if (!productivity){
        res.status(400)
        throw new Error('productivity not found')
    }

    const updatedProductivity = await Productivity.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedProductivity)
})

// @desc DELETE productivity
// @route DELETE /api/productivity/:id
// @access Private
const deleteProductivity = asyncHandler( async (req, res) => {

    const productivity = await Productivity.findByIdAndDelete(req.params.id)

    if (!productivity) {
        res.status(400)
        throw new Error('productivity not found')
    }
    else{
        res.status(200).json({id : req.params.id})
    }
})


module.exports={
    createProductivity,
    getProductivity,
    updateProductivity,
    deleteProductivity
}
