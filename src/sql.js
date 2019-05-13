const mysql = require('mysql')

// 创建链接对象
 const con = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'litao777',
   port: '3306',
   database: 'myblog'
 })

 //  开始链接

 con.connect()


 // 执行 sql 语句

const sql = `update users set realname='李涛哥哥' where username='litaogege'`
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(result)
})

// 关闭连接
con.end()
