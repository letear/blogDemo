const redis = require('redis')

// 创建客户端

const redisCliet = redis.createClient(6379, '127.0.0.1')

redisCliet.on('error', err => {
  console.error(err)
})


// 测试
redisCliet.set('myname', 'litao', redis.print)
redisCliet.get('myname', (err, val) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('val', val)

  // 退出进程
  redisCliet.quit()
})