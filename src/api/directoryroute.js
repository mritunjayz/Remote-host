let express = require('express');
var router = express.Router();

import controller from './controller.js'


router.post('/',(req,res) =>{
    //console.log(req.body.path)
controller.directorylist(req.body.path).then((data) => {
    //console.log('paased mohit',data)
    res.send(data);
}).catch(err => {
    //console.log('mohit err',err)
    res.send(err);
})
})
 export default router;
