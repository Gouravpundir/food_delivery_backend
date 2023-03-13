const express = require("express");
const router = express.Router();

const userController= require('../controller/userController')
const loginController= require('../controller/loginController')
const orderData= require('../controller/orderData')

router.post('/createUser',userController.createUser)
router.get('/User',userController.getAll)

//login user
router.post('/login',loginController.loginUser)
//order
router.post('/orderData',orderData.orderData)

module.exports = router