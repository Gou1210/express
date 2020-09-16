var express = require('express');
const {SuccessModel,ErrorModel} = require('../model/resModel')
var router = express.Router();
const {login} = require('../controller/user')
router.post('/login', function(req, res, next) {

    const {username,password} = req.body
    const result = login(username,password)
    return result.then(data=>{
        if(data.username){
            req.session.username = data.username
            req.session.realname = data.realname
            res.json(new SuccessModel())
            return
          }
          res.json(new ErrorModel('登录失败')  )
            
    })
});

router.get('/test', function(req, res, next) {
console.log(111)
    if(req.session.username){
        res.json({
            error:0,
            msg:'登录成功'
        })
        return
    }
    res.json({
        error:-1,
        msg:"登录失败"
    })
})
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
