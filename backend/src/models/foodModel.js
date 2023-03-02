const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        trim:true
    },
    options:[{
        type:String,
        required:true,
        trim:true
    }],
    image:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
},{ timestamps: true })


module.exports= mongoose.model("food",foodSchema)