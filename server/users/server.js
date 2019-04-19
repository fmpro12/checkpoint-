const express = require('express');
const router = express.Router();
const User = require('./UserModel')

var io = require('socket.io')();

router.get('/', (req, res) => {
    User.find({})
	.then(data => res.send(data));
 });

 router.post('/', (req, res) => {
	const item = new User(req.body.values);
    item.save((err) =>{
        if(err)
          sendStatus(500);
         else 
        res.sendStatus(200);
      })
    })

    router.put( '/:user_id', ( req, res ) => {       
        User.findByIdAndUpdate(req.params.user_id, req.body)
        .then(data => {
           if(User)
           res.send(data);
           else
           res.status(404).send("User not found");
       })
       .catch (e => res.status(400).send("User not exist"));
   });
    
   router.delete( '/:user_id', ( req, res ) => {       
    User.findByIdAndRemove(req.params.user_id)
    .then(data => {
       if(User)
       res.send(data);
       else
       res.status(404).send("User not found");
   })
   .catch (e => res.status(400).send("User not exist"));
});



module.exports = router;