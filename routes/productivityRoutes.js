const express=require('express')
const router = express.Router()
const {createProductivity,
    getProductivity,
    deleteProductivity,
    updateProductivity
}= require('../controller/productivityController')
const {protect}=require('../middlware/authMiddlware')


router.route('/').post(protect,createProductivity).get(protect,getProductivity)
router.route('/:id').put(protect,updateProductivity).delete(protect,deleteProductivity)
module.exports= router
