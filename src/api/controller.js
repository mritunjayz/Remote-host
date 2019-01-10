import ssh_node from 'node-ssh'

let ssh = new ssh_node();

let controller= {};

 controller.login = function (logincredentials){
    return new Promise((resolve, reject) => {
    ssh.connect({
    host:logincredentials.host,
    username: logincredentials.username,
    privateKey:logincredentials.key
}).then( function()  {
    resolve('logged')
}).catch(err => {
    reject(err)
})
}) 
}

export default controller;