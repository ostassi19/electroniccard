const express=require('express')
const router = express.Router()
const {createAlert,
    getAlert,
    deleteAlert,
    updateAlert
}= require('../controller/alertController')
const {protect}=require('../middlware/authMiddlware')

router.route('/').post(protect,createAlert).get(protect,getAlert)
router.route('/:id').put(protect,updateAlert).delete(protect,deleteAlert)
module.exports= router
