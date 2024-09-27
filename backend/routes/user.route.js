const express=require('express')
const {Signup,Login,Logout,}=require('../controllers/user.controller')

const router=express.Router();

router.post('/signup',Signup)
router.post('/login',Login)
router.get('/logout',Logout)

module.exports=router