const express = require('express');
const router = express.Router();

const paymentVerify = (req, res, next) =>{
    console.log('check user paid for service...')
    next()   
}

const myLog = (req, res, next) =>{
    console.log(`request was called...${req.url}`)
    next()   
}

router.get('/', (req, res, next)=>{
  res.json({msg:'main api router'})
})