import ssh_node from 'node-ssh'
let data = require('fs').readFileSync('/home/mohit/portfolio.pem')

let ssh = new ssh_node();

let controller= {};

 controller.login = function (logincredentials){
    return new Promise((resolve, reject) => {
        console.log('login controller 0')
    ssh.connect({
        host:'ec2-13-126-73-149.ap-south-1.compute.amazonaws.com',
    username: 'ec2-user',
    privateKey:'/home/mohit/portfolio.pem'
}).then( function()  {
    console.log('login controller 1')
    resolve('logged')
}).catch(err => {
    console.log('login controller err' , err)
reject(err)
})
}) 
}

export default controller;