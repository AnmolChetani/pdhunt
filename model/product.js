const mongoose =require("mongoose")

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        min:1,
        max:20
    },
    url:{
        type:String,
        required:true
    },
    shortDesc:{
        type:String,
        required:true,
        maxlength:400
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})