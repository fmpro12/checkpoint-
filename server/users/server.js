const express = require('express');
const router = express.Router();
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

    router.put( '/:_id', ( req, res ) => {
        console.log(req.body.body.status)
        User.findByIdAndUpdate(req.params.user_id, req.body.body.status)
        .then(data => {
           if(follower)
           res.send(data);
           else
           res.status(404).send("Follower not found");
       })
       .catch (e => res.status(400).send("Follower not exist"));
   });
    

module.exports = router;