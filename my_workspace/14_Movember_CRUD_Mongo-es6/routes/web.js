const express = require('express');

const User    = require('./../lib/UserModel');

const color_logger = require('../utils/color_logger');
const p = color_logger('web');

const router = express.Router();

router.get('/', (req, res)=> {
    res.render('homepage');
});

router.get('/users/new', (req, res)=> {
    res.render('addUser',{raamsses:"456...",vayzata:'some'});
});
//--------------------
//    GET ALL USERS
//--------------------
router.get('/users', (req, res, next)=> {

  User.find()
      .then( usersArray => {
        p.info('num users found: ' , usersArray.length);
        res.render('usersList',{users:usersArray});
      })
      .catch( err => {
        p.error(err);
        next(err);
      });

});
//-------------------------
//    GET SPECIFIC USER
//-------------------------
router.get('/users/edit/:id',  (req, res,next)=> {

  User.findById(req.params.id)
      .then( userInfo => {
        p.info('user found: ' , userInfo.first_name);
        res.render('updateUser',{user:userInfo});
      })
      .catch( err => {
        p.error(err);
        next(err);
      });

});

module.exports = router;
