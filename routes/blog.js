var express = require('express');
const {getList,getDetail,newBlog,updateBlog,deleteBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')
var router = express.Router();
const loginCheck = require('../middleware/loginCheck')
/* GET home page. */
router.get('/list', (req, res, next) =>{
  let author = req.query.author
  const keyword = req.query.keyword
  if(req.query.isadmin){
    if(req.session.username==null){
      res.json(
        new ErrorModel('未登录')
      )
      return
    }

    author = req.session.username
  }
  const result = getList(author,keyword)
  return result.then(listData=>{
      res.json(new SuccessModel(listData)) 
  })
});

router.get('/detail',(req,res,next)=>{
  const result = getDetail(req.query.id)
  return result.then(detailData=>{
      res.json(new SuccessModel(detailData)) 
  })
})
router.post('/new',loginCheck,(req,res,next)=>{
  req.body.author = req.session.username
  const result = newBlog(req.body)

  return result.then(data=>{

      res.json(
        new SuccessModel(data)
      ) 
  })
})
router.post('/update',loginCheck,(req,res,next)=>{
  const result = updateBlog(req.query.id,req.body)
  return result.then(data=>{
      if(data){
          res.json(new SuccessModel()) 
        }else{
          res.json(
            new ErrorModel('更新失败')
          ) 
        }
  })
})
router.post('/del',loginCheck,(req,res,next)=>{
  req.body.author = req.session.username
  const result = deleteBlog(req.query.id,req.body.author )
  return result.then(data=>{
      if(data){
          res.json(new SuccessModel())  
        }else{
            res.json(new ErrorModel('删除失败'))
        }
  })
})

module.exports = router;
