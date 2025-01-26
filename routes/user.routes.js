const userController = require('../controllers/user.controller')
const weatherController = require('../controllers/weather.controller')

const userAuth = require('../middlewares/user-auth')

const express = require('express');
const router = express.Router();

router.post('/register', userController.userRegistration)
router.post('/login', userController.userLogin)

router.get('/users', userAuth, userController.getAllUser)
router.get('/weather', userAuth, weatherController.weather)
router.delete('/users/:id', userAuth, userController.deleteUserById)
router.get('/users/:id', userAuth, userController.getUserById)
router.put('/users/:id', userAuth, userController.updateNameUserById)

module.exports = router