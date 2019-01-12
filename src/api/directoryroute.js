let express = require('express');
var router = express.Router();

import controller from './controller.js'


router.post('/',(req,res) =>{
controller.directorylist(req.body.path).then((data) => {
    res.send(data);
}).catch(err => {
    res.send(err);
})
})
 export default router;
