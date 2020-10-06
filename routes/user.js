var express = require('express');
const {SuccessModel,ErrorModel} = require('../model/resModel')
var router = express.Router();
const {login,regist} = require('../controller/user')
router.post('/login', function(req, res, next) {

    const {username,password} = req.body
    const result = login(username,password)
    return result.then(resData=>{

        if(resData.length!=0){
            req.session.username = resData[0].username
            req.session.realname = resData[0].realname
            res.json(new SuccessModel())  

          }
          res.json(new ErrorModel('账户或者密码错误'))
          return

    })
})

router.post('/regist', (req, res, next) =>{
  
    const {username,password} = req.body
    const result = regist(username,password)
    return result.then(resData=>{
        if(resData){
            res.json(new SuccessModel(resData)) 
            return
        }
        res.json(new ErrorModel('账户已存在'))
    })
    
  });


// router.get('/test', function(req, res, next) {
// console.log(111)
//     if(req.session.username){
//         res.json({
//             error:0,
//             msg:'登录成功'
//         })
//         return
//     }
//     res.json({
//         error:-1,
//         msg:"登录失败"
//     })
// })
// router.get('/session-test',(req,res,next)=>{
//     const session = req.session
//     if(session.num==null){
//         session.num = 0
//     }
//     session.num++
//     res.json({
//         num:session.num
//     })
// })

module.exports = router;
