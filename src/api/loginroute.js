import express from 'express';

import controller from './controller.js'

let router = express.Router();

//let ssh = ssh_node()

router.post('/',(req,res) =>{
	console.log("login hited")
controller.login({
	host:req.body.host,
	username:req.body.username,
	key:req.body.key
}).then((data) => {
	res.send('logged')
}).catch( err =>{
	res.status(401)
	res.send(err)
})
})

 export default router;



