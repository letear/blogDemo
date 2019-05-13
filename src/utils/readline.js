const fs = require('fs')

const path = require('path')

const readline = require('readline')

const filename = path.join(__dirname, '../', '../', 'logs', 'access.log')

// 创建read stream
const readStream = fs.createReadStream(filename)

// 创建readline 对象
const rl = readline.createInterface({
  input: readStream
})


let chromeNum = 0
let sum = 0


// 逐行读取

rl.on('line', (lineData) => {
    if (!lineData) {
      return
    }

    // 记录总行数
    sum++

    const arr = lineData.split(' -- ')
    // 根据日志格式来确定所需要的信息位置
    if (arr[2] && arr[2],indexOf('Chrome') > 0) {
        // 累加chrome 的数量
        chromeNum++
    }
})

// 监听完成
rl.on('close', () => {
  console.log('chrome 占比：' + chromeNum / sum)
})
