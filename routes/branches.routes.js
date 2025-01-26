const branchesController = require('../controllers/branches.contorller')

const userAuth = require('../middlewares/user-auth')

const express = require('express');
const router = express.Router();

router.post('/branches', userAuth, branchesController.postBranches)
router.get('/branches', userAuth, branchesController.getAllBranches)
router.delete('/branches/:id', userAuth, branchesController.deleteBranchesById)
router.get('/branches/:id', userAuth, branchesController.getBranchesById)
router.put('/branches/:id', userAuth, branchesController.updateBranchesById)

module.exports = router