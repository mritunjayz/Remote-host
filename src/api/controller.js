import ssh_node from 'node-ssh'
import fs from 'fs'

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

controller.logout = function () {
    return new Promise ((resolve, reject) => { 
    ssh = new ssh_node();
    resolve('done')
    })

}

controller.directorylist = function (path) {
    console.log(path)
    return new Promise ((resolve, reject) => {
        ssh.execCommand(`cat ${path}`, { cwd:'' }).then(function(result) {
            if(result.stdout){
                onfile(path).then(data => {
                    console.log('no error')
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

controller.editorsave = function (data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./temp',data.filedata, function (err) {
            if (err) {
                reject(err)
                throw err;
            }
            

            ssh.putFiles([{ local: './temp', remote: data.path }]).then(function(r) {
                
                resolve("file edited done")
              }, function(error) {
                
                reject(error);
              })

          });
    })
}

controller.download = function (path) {
return new Promise ((resolve, reject) => {
      ssh.getFile(`${path}`, '/').then(function(Contents) {
        console.log("The File's contents were successfully downloaded")
      }, function(error) {
        console.log("Something's wrong")
        console.log(error)
      })
})
}

controller.terminal = function (cmd) {
    return new Promise ((resolve, reject) => {
        ssh.execCommand('ls', { cwd:'/' }).then(function(result) {
            console.log('STDOUT: ' + result.stdout)
            console.log('STDERR: ' + result.stderr)
            resolve(result.stdout)
          })
    })
    }

function ondirectory(path){
    return new Promise ((resolve, reject) => {
    ssh.execCommand(`ls ${path}`, { cwd:'' }).then(function(result) {
        if(result.stdout){
          let li = result.stdout.split('\n')  
          let responsedata = {
              type:'Directory',
              data:li
          }
          resolve(responsedata)
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
        ssh.getFile('./temp', `${path}`).then(function(data) {
            let responsedata = {
                type : 'file'
            }
            fs.readFile('./temp', 'utf8', function(err, contents) {
               //console.log(contents);
               responsedata.content=contents
                resolve(responsedata)
            });s
            
            console.log('lalan')
          }, function(error) {
              console.log(error)
            reject(error)
          })
    })
}

export default controller;