const mongoose = require('../db/mongoose')


const AnliSchema = mongoose.Schema({
anli:[
    {
        id:String,
        img:String,
        site:String,
        time:String,
        title:String
    }
]
})
const ZhishiSchema = mongoose.Schema({
anli:[
    {
        id:String,
        img:String,
        site:String,
        time:String,
        title:String
    }
]
})
const MenchuangSchema = mongoose.Schema({
anli:[
    {
        id:String,
        img:String,
        site:String,
        time:String,
        title:String
    }
]
})

const anliModel = mongoose.model('Anli', AnliSchema, 'anli')
const zhishiModel = mongoose.model('Zhishi', ZhishiSchema, 'zhishi')
const menchuangModel = mongoose.model('Menchuang', MenchuangSchema, 'menchuang')

// 查询
const getAnli = () => {

    const promise = new Promise((resolve, reject) => {
        anliModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
const getZhishi = () => {

    const promise = new Promise((resolve, reject) => {
        zhishiModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
const getMenchuang = () => {

    const promise = new Promise((resolve, reject) => {
        menchuangModel.find({ }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}



module.exports = { getAnli,getZhishi,getMenchuang}