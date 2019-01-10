import ssh_node from 'node-ssh'
let data = require('fs').readFileSync('/home/mohit/portfolio.pem')

let ssh = new ssh_node();

let controller= {};

 controller.login = function (logincredentials){
    return new Promise((resolve, reject) => {
        console.log(logincredentials)
    ssh.connect({
        host:logincredentials.host,
    username: logincredentials.username,
    privateKey:logincredentials.key
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