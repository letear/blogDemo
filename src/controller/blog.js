const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      createTime: 15678981112,
      author: '张胜男'
    },
    {
      id: 2,
      title: '标题2',
      createTime: 15678981112,
      author: '张胜男'
    },
    {
      id: 3,
      title: '标题3',
      createTime: 15678981112,
      author: '张胜男'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 3,
    title: '标题3',
    createTime: 15678981112,
    author: '张胜男'
  }
}

const newBLog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
   return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBLog,
  updateBlog,
  delBlog
}