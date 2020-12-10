//iyabo.com/api/ath/signup, middleware

//const express = require('express')
//express.Router()

const router = require('express').Router()
const signup = require('../controllers/auth')

router.post("/api/auth/signup", signup )


module.exports = routes