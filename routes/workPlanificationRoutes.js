const express=require('express')
const router = express.Router()
const {createWorkPlanification,
    getWorkPlanification,
    deleteWorkPlanification,
    updateWorkPlanification
}= require('../controller/workPlanificationController')
const {protect}=require('../middlware/authMiddlware')


router.route('/').post(protect,createWorkPlanification).get(protect,getWorkPlanification)
router.route('/:id').put(protect,updateWorkPlanification).delete(protect,deleteWorkPlanification)
module.exports= router
