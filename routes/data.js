var express = require('express');
const {getAnli,getZhishi,getMenchuang} = require('../controller/data')
const {SuccessModel,ErrorModel} = require('../model/resModel')
var router = express.Router();

router.get('/anli', (req, res, next) =>{
  
    const result = getAnli()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
router.get('/zhishi', (req, res, next) =>{
  
    const result = getZhishi()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
router.get('/menchuang', (req, res, next) =>{
  
    const result = getMenchuang()
    return result.then(resData=>{
      console.log(resData)
        res.json(new SuccessModel(resData)) 
    })
  
  });
module.exports = router;