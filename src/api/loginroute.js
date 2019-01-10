import ssh_node from 'node-ssh'

import express from 'express';

import controller from './controller.js'

let router = express.Router();

//let ssh = ssh_node()

router.post('/',(req,res) =>{
	console.log("hitted login route")
controller.login({
	host:req.host,
	username:req.username
}).then((data) => {
	console.log("loggggged",data)
	res.send('logged')
}).catch( err =>{
	res.send('err')
})
})

 export default router;



