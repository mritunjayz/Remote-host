import express from 'express';

import controller from './controller.js'

let router = express.Router();

//let ssh = ssh_node()

router.post('/',(req,res) =>{
    console.log('called terminal')
controller.download(res.body.path).then((data) => {
	res.send(data)
}).catch( err =>{
	res.status(401)
	res.send(err)
})
//res.send("terminal called")
})

 export default router;