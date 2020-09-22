// const {exec,escape} = require('../db/mongoose')
// const login = (username,password)=>{
//     username = escape(username)
//     password = escape(password)
//     const sql = `
//     select username,realname from users where username = ${username} and password=${password}
//     `
//     return exec(sql).then(data=>{
//         return data[0]||{}
//     })
// }

// module.exports = {login}

const mongoose = require('../db/mongoose')


const UserSchema = mongoose.Schema({


    username:String,
    password:String,
    realname:String
})

const UserModel = mongoose.model('User',UserSchema,'user')

const login = (_username, _password) => {

   const promise =  new Promise ((resolve,reject)=>{
        UserModel.find({username:_username,password:_password},(err,result)=>{
            if(err){
                reject(err)
                return
            }
           
            resolve(result)
        })
    })
    return promise

}

module.exports = {login}