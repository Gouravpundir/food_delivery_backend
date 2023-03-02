const express = require("express");
const router = express.Router();

const userController= require('../controller/userController')
const loginController= require('../controller/loginController')
router.post('/createUser',userController.createUser)
router.get('/User',userController.getAll)

//login user
router.post('/login',loginController.loginUser)

module.exports = router