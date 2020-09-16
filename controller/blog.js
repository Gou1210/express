const {exec} = require('../db/mysql')
const getList = (author,keyword) =>{
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}
const getDetail = (id) =>{
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(row=>{
        return row[0]
    })
}
const newBlog = (blogData={}) =>{
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    // const createTime = Date.now()
    const createTime = "2020-9-15 08:28:26"
    const sql = `
    insert into blogs (title,content,createtime,author)
    values ('${title}','${content}','${createTime}','${author}')
    `
    return exec(sql).then(insertData=>{
        return {
            id:insertData.insertId
        }
    })
}
const updateBlog = (id,blogData={}) =>{

    const title = blogData.title
    const content = blogData.content
    const sql = `
    update blogs set title='${title}',content='${content}' where id=${id}
    `
    return exec(sql).then(data=>{
        if(data.affectedRows>0){
            return true
        }
        return false
    })
}
const deleteBlog = (id,author) =>{

    const sql = `
    delete from blogs where id=${id} and author='${author}'
    `
    return exec(sql).then(data=>{
        if(data.affectedRows>0){
            return true
        }
        return false
    })
}

module.exports = {getList,getDetail,newBlog,updateBlog,deleteBlog}