let express = require('express');
var router = express.Router();

import controller from './controller.js'


router.post('/',(req,res) =>{
    //console.log(req.body.path,'front call path')

controller.editorsave({filedata:req.body.filedata ,path: req.body.path}).then((data) => {
    res.send(data);
}).catch(err => {
    res.send(err);
})
})
 export default router;