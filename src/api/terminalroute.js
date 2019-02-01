import express from 'express';

import controller from './controller.js'

let router = express.Router();

//let ssh = ssh_node()

router.get('/',(req,res) =>{
    console.log('called terminal')
controller.terminal('ss').then((data) => {
	res.send(data)
}).catch( err =>{
	res.status(401)
	res.send(err)
})
//res.send("terminal called")
})

 export default router;



