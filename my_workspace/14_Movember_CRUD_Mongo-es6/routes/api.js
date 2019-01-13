const express     = require('express');
const bodyParser  = require('body-parser');
const d           = require('../lib/MiniLogger');
const User        = require('../lib/UserModel');
const mongoose    = require('../lib/db');

const color_logger = require('../utils/color_logger');
const p = color_logger('api');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//routes
//--------------------
//    CREATE  user
//--------------------
router.post('/addUser', (req, res, next) => {

    const user = new User({
                ...req.body, 
                _id: mongoose.Types.ObjectId
    });

    const feedback = await user.save();
    res.json(feedback);

    // user.save()
    //     .then( ()=> res.redirect('/users'))
    //     .catch( err =>{
    //         p.error(err);
    //         next(err);
    //     });

});
//--------------------
//    UPDATE  user
//--------------------
router.post('/updateUser',(req, res,next)=> {

    p.info('updateUser, user_id:',req.body.user_id);

    User.findOneAndUpdate( {
                            _id:req.body.user_id,
                            ...req.body
                            })
                            .then( numAffected => res.redirect('/users'))
                            .catch( err => {
                                p.error(err);
                                next(err);
                            });
});
//--------------------
//    DELETE  user
//--------------------
router.delete('/deleteUser/:id', (req, res, next) => {
    p.info('deleteUser, user_id: ',req.params.id);

    User.remove({_id:req.params.id})
        .then( () => res.send('user was removed!!!'))
        .catch(function(err){
            p.error(err);
            next(err);
        });
});


module.exports = router;
