import express from 'express';

import controller from './controller.js'

let router = express.Router();

//let ssh = ssh_node()

router.get('/',(req,res) =>{
    console.log('called')
controller.logout().then((data) => {
	res.send('logout')
}).catch( err =>{
	res.status(401)
	res.send(err)
})
})

 export default router;



