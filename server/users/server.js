const express = require('express');
const router = express.Router();
const path = require('path')
const User = require('./UserModel')


router.get('/', (req, res) => {
    User.find({})
	.then(data => res.send(data));
 });

 router.post('/', (req, res) => {
	const post = new User(req.body);
	post.save()
	.then(data => res.send(data))
	.catch(e => res.status(400).send(e.message));
});

router.put('/:userId', (req, res) => {	 
    User.findByIdAndUpdate(req.params.user_id,{$set:req.body}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
        res.send('Done')
    });
})



module.exports = router;