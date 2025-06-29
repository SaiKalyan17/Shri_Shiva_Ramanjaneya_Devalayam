
import mongoose from "mongoose";
const answerSchema = new mongoose.Schema({
    answeredBy: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    answeredAt: {
      type: Date,
      default: Date.now
    }
  });

  
const querySchema = mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name should be entered"]
    },
    mobileNumber:{
        type:String,
        required:[true,"mobilenumbershould be entered"]
    },
    Inquiry:{
        type:String,
        required:[true,"Name should be entered"]
    },
    answer: {
    type: answerSchema, // single answer object
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
const Query = mongoose.model("Query",querySchema)
export default Query;
