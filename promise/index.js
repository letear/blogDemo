const fs = require('fs')
const path = require('path')

function getFileContent (fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullName = path.resolve(__dirname, '', fileName)
    fs.readFile(fullName, (err, data) => {
      if(err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}


getFileContent('a.json').then(res => {
  console.log('a', res.msg)
  return getFileContent(res.next)
}).then(res => {
  console.log('b', res.msg)
  return getFileContent(res.next)
}).then(res => {
  console.log('c', res.msg)
})