const mongoose = require('../db/mongoose')
var https = require('https');
var qs = require('querystring');

const HomeSchema = mongoose.Schema({

        anli:[],
        zhihsi:[],
        menchuang:[]


})

const WenzhangSchema = mongoose.Schema({

        zhishi:[],
        anli:[],
        menchuang:[]

})
const DongkouSchema = mongoose.Schema({

        shuju:[],
        parts:[],
        parts1:[]
    
})
const YangtaiSchema = mongoose.Schema({

        shuju:[],
        parts:[],
        parts1:[],
        shanU:[],
        shanL:[]
    
})
const HejinSchema = mongoose.Schema({

        shuju:[]
    
})

// const CarSchema = mongoose.Schema({

//     goodsInfo:{}
    
// })

const HomeModel = mongoose.model('Home', HomeSchema, 'home')
const WenzhangModel = mongoose.model('Wenzhang', WenzhangSchema, 'wenzhang')
const DongkouModel = mongoose.model('Dongkou', DongkouSchema, 'dongkou')
const YangtaiModel = mongoose.model('Yangtai', YangtaiSchema, 'yangtai')
const HejinModel = mongoose.model('Hejin', HejinSchema, 'hejin')

// const CarModel = mongoose.model('Car', CarSchema, 'car')

// 查询
const getHome = () => {

    const promise = new Promise((resolve, reject) => {
        HomeModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}

const getWenzhang = () => {

    const promise = new Promise((resolve, reject) => {
        WenzhangModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
const getDongkou = () => {

    const promise = new Promise((resolve, reject) => {
        DongkouModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
const getYangtai = () => {
    const promise = new Promise((resolve, reject) => {
        YangtaiModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
const getHejin = () => {
    const promise = new Promise((resolve, reject) => {
        HejinModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
const sendCode = (phone) => {
    const promise = new Promise((resolve, reject) => {
        const phoneCode = function(){
            var apikey = 'a148816e256be86db840c07a8aedbef9';
            // 修改为您要发送的手机号码，多个号码用逗号隔开
            var mobile = phone;
            // 修改为您要发送的短信内容
            var text = '【北方门窗商城】您的验证码是1235。如非本人操作，请忽略本短信';
            // 指定发送的模板编号
            var tpl_id = 4029726;
            // 指定发送模板的内容
            var tpl_value =  {'#code#':'1235','#company#':'北方兴业'};
            // 语音短信的内容
            var code = '1235';
            // 查询账户信息https地址
            var get_user_info_uri = '/v2/user/get.json';
            // 智能匹配模板发送https地址
            var sms_host = 'sms.yunpian.com';
        
            
            send_sms_uri = '/v2/sms/single_send.json';
        
            
            send_sms(send_sms_uri,apikey,mobile,text);
        
            
            function send_sms(uri,apikey,mobile,text){
                var post_data = {  
                'apikey': apikey,  
                'mobile':mobile,
                'text':text,
                };//这是需要提交的数据  
                var content = qs.stringify(post_data);  
                post(uri,content,sms_host);
            }
            
        
            function post(uri,content,host){
                var options = {  
                    hostname: host,
                    port: 443,  
                    path: uri,  
                    method: 'POST',  
                    headers: {  
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
                    }  
                };
                var req = https.request(options, function (res) {  
        
                    res.setEncoding('utf8');  
                    res.on('data', function (chunk) {  
                        console.log('BODY: ' + chunk);  
                    });  
                }); 
                //console.log(content);
                req.write(content);  
              
                req.end();   
            }
            resolve(phoneCode())
        }
    })
    return promise

   
 
 }



module.exports = {getHome,getWenzhang,getDongkou,getYangtai,getHejin,sendCode}