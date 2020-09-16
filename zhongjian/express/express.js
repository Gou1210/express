const http = require('http')
const slice = Array.prototype.slice

class LikeExpress {
    constructor(){
        // 存放中间件的列表
        this.routes = {
            all:[],
            get:[],
            post:[]
        }
    }
}

// 工厂函数
module.exports = () =>{
    return new LikeExpress()
}