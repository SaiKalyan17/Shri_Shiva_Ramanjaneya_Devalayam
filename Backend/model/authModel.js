import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true,'Username is must Required']
    },
    mobileNumber:{
        type:String,
        required : [true,'Mobile Number is required'],
        unique:[true,'Mobile Number is Already Taken']
    },
    password:{
        type:String,
        required : [true,'password is required'],
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
}

},{
    timestamps:true
})

 const Auth  = mongoose.model('Auth',authSchema)
 export default Auth;
