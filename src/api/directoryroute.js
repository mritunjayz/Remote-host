let express = require('express');
var router = express.Router();

import controller from './controller.js'


router.post('/',(req,res) =>{
    console.log(req.body.path,'front call path')

controller.directorylist(req.body.path).then((data) => {
    console.log('backed not error send')
    res.send(data);
}).catch(err => {
    console.log('yes error is going')
    res.send(err);
})
})
 export default router;
