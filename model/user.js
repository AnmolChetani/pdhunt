const mongoose=require("mongoose")

const userSchema=new User({
    name:{
        type:String,
        required:true,
        trim:true,
        min:1,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
      },
})
module.exports=mongoose.model("User",userSchema)