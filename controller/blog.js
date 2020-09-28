const mongoose = require('../db/mongoose')


const BlogSchema = mongoose.Schema({

    // _id:String,
    title: String,
    content: String,
    createTime: Number,
    author: String
})

const BlogModel = mongoose.model('Blog', BlogSchema, 'blog')

// 查询
const getList = (_author, _keyword) => {

    const promise = new Promise((resolve, reject) => {
        BlogModel.find({ author: _author, title: { $regex: _keyword } }, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
// 根据id查询
const getDetail = (id) => {
    const objectId = mongoose.Types.ObjectId(id)
    const promise = new Promise((resolve, reject) => {

        BlogModel.find((objectId), (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
// 增加
const newBlog = (blogData = {}) => {
    const instantiationBlog = new BlogModel({
        title: blogData.title,
        content: blogData.content,
        author: blogData.author,
        createTime: Date.now()
    })
    const promise = new Promise((resolve, reject) => {

        instantiationBlog.save({}, (err, result) => {
            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
    return promise

}
// 更新
const updateBlog = (id, blogData) => {
    const title = blogData.title
    const content = blogData.content
    const createTime = blogData.createTime
    const promise = new Promise((resolve, reject) => {
        console.log(id)
        BlogModel.updateOne({ '_id': id }, { "title": title, "content": content, "createTime": createTime }, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            console.log(result)
            resolve(result)
        })
    })
    return promise

}
// 删除
const deleteBlog = (id) => {

    const promise = new Promise((resolve, reject) => {

        BlogModel.deleteOne({ '_id': id }, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            console.log(result)
            resolve(result)
        })
    })
    return promise

}

module.exports = { getList, getDetail, newBlog, updateBlog, deleteBlog }