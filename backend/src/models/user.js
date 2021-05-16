const mongoose = require('mongoose')



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