const express=require('express')
const router = express.Router()
const {createSupervisedMachine,
    getSupervisedMachine,
    deleteSupervisedMachines,
    updateSupervisedMachine
}= require('../controller/supervisedMachineController')
const {protect}=require('../middlware/authMiddlware')


router.route('/').post(protect,createSupervisedMachine).get(protect,getSupervisedMachine)
router.route('/:id').put(protect,updateSupervisedMachine).delete(protect,deleteSupervisedMachines)
module.exports= router
