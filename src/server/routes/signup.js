
const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')
const users = require('../../db/users')
const encryptPassword = require('../../lib/encryptPassword')
module.exports = {
    path: '/signup',
    method : 'post',
    handler: (req,res) =>{
        const userData = _.pick(
            req.body,
            [
                'id',
                'password',
                'name',
                'gender',
                'age',
                'phoneNumber'
            ]
        )
        const foundId = users.find(user =>{
            return user.id === userData.id
        })
        if(foundId !== undefined){
            return res.status(400).json({ success: false })
        }
        users.push(Object.assign(userData, { idx: uuidv4(), 
            ...(userData.password !== undefined &&{
                password: encryptPassword(userData.password)
            })
        }))
    
        return res.json({ success: true })
    }
}