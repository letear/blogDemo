
const { getList, getDetail, newBLog, updateBlog, delBlog} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 统一的登陆验证函数
const loginCheck = () => {
    if (!req.session.username) {
        return Promise.resolve(
          new ErrorModel('尚未登录')
        )
    }
 }


const handleBogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id
  
  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {

    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData) 
    })
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {

    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }

    // loginCheck(req)

    req.body.author = req.session.username
    const result = newBLog(req.body)
    return  result.then(data => {
      return new SuccessModel(data)
    })
  }

    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
      const result = updateBlog(id, req.body)
      return result.then(val => {
        if (val) {
          return new SuccessModel()
        } else {
          return new ErrorModel('更新博客失败')
        } 
      })
    }

    // 删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/del') {
      // loginCheck(req)
      const loginCheckResult = loginCheck(req)
      if (loginCheckResult) {
        return loginCheckResult
      }
      
      const result = delBlog(id, req.session.username)
      return result.then(val => {
        if(val) {
          return new SuccessModel()
        } else {
          return new ErrorModel('删除博客')
        }
      })
    }

}

module.exports = handleBogRouter