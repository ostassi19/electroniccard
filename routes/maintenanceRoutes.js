const express=require('express')
const router = express.Router()
const {createMaintenance,
    getMaintenance,
    deleteMaintenances,
    updateMaintenance
}= require('../controller/maintenanceController')
const {protect}=require('../middlware/authMiddlware')


router.route('/').post(protect,createMaintenance).get(protect,getMaintenance)
router.route('/:id').put(protect,updateMaintenance).delete(protect,deleteMaintenances)
module.exports= router
