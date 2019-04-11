const express = require('express');
const router = express.Router();
const User = require('./UserModel')


router.get('/', (req, res) => {
    User.find({})
	.then(data => res.send(data));
 });

 router.post('/', (req, res) => {
	const item = new User(req.body);
	item.save()
	.then(data => res.send(data))
	.catch(e => res.status(400).send(e.message));
});

    router.put( '/:user_id', ( req, res ) => {       
        User.findByIdAndUpdate(req.params.user_id, req.body)
        
        .then(data => {
           if(User)
           res.send(data);
           else
           res.status(404).send("Follower not found");
       })
       .catch (e => res.status(400).send("Follower not exist"));
   });
    

module.exports = router;