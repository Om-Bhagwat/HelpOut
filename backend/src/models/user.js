const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')



const userSchema = new mongoose.Schema({
    
    cusname: {
        type: String,
        
    },
    donorId:{
        type: Number,
    },
    medId:{
        type: Number,
    }
})


const user = mongoose.model('user',userSchema)

module.exports = user