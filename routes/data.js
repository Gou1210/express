var express = require('express');
const {getHome,getWenzhang,getDongkou,getYangtai,getHejin,sendCode} = require('../controller/data')
const {SuccessModel,ErrorModel} = require('../model/resModel')
var router = express.Router();

router.get('/home', (req, res, next) =>{
  
    const result = getHome()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });

router.get('/wenzhang', (req, res, next) =>{
  
    const result = getWenzhang()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
router.get('/dongkou', (req, res, next) =>{
  
    const result = getDongkou()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
router.get('/yangtai', (req, res, next) =>{
    const result = getYangtai()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
router.get('/hejin', (req, res, next) =>{
    const result = getHejin()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
  router.post('/code', (req, res, next) =>{
  
    const {phone} = req.body
    const result = sendCode(phone)
    return result.then(resData=>{
        if(resData){
            res.json(new SuccessModel(resData)) 
            return
        }
        res.json(new ErrorModel('账户已存在'))
    })
    
  });
// router.post('/car', (req, res, next) =>{
  
//     const result = postCar(req.body)
//     return result.then(resData=>{
//       console.log(resData)
//         res.json(new SuccessModel(resData)) 
//     })
  
//   });
module.exports = router;