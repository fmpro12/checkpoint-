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




module.exports = router;