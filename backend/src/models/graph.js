const mongoose = require('mongoose')



const graphSchema = new mongoose.Schema({

    name: {
        type: String,

    },
    email: {
        type: String,

    },
    hash:{
        type: String,

    },
    phasecount:{
        type:Number,

    }
})


const graph = mongoose.model('graph',graphSchema)

module.exports = graph
