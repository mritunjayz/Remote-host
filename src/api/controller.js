import ssh_node from 'node-ssh'
import { promises } from 'fs';

let ssh = new ssh_node();

let controller= {};

 controller.login = function (logincredentials){
    return new Promise((resolve, reject) => {
    ssh.connect({
    host:logincredentials.host,
    username: logincredentials.username,
    privateKey:logincredentials.key
}).then( function(data)  {
    resolve('logged')
}).catch(err => {
    reject(err)
})
}) 
}


controller.directorylist = function (path) {
    return new Promise ((resolve, reject) => {
        ssh.execCommand(`cat ${path}`, { cwd:'' }).then(function(result) {
            if(result.stdout){
                onfile(path).then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            }
            else if (result.stderr){
                ondirectory(path).then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            }
          }).catch(err => {
              reject(err)
          })
    })
}

function ondirectory(path){
    return new Promise ((resolve, reject) => {
    ssh.execCommand(`ls ${path}`, { cwd:'' }).then(function(result) {
        if(result.stdout){
          let li = result.stdout.split('\n')  
          resolve(li)
        }
        else if (result.stderr){
           reject(result.stderr)
        }
      }).catch(err => {
          reject(err)
      })
    })
    }

function onfile (path) {
    return new Promise ((resolve, reject) => {
        ssh.getFile('/home/mohit/temp', `${path}`).then(function(data) {
            resolve(data)
          }, function(error) {
            reject(error)
          })
    })
}

export default controller;