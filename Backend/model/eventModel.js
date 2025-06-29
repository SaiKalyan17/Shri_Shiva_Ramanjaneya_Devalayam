import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    eventName:{
        type:String,
        required : [true,'eventname is required']
    },
    date:{
        type:String,
        required : [true,'date is required'],
    },
    description:{
        type:String,
        required : [true,'description is required'],
    }
},{
    timestamps:true
}
)

const Event = mongoose.model("Event",eventSchema)
export default Event;