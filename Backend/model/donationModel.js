
import mongoose from "mongoose";

const donationSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name should be entered"]
    },
    mobileNumber:{
        type:String,
        required:[true,"mobile Numbershould be entered"]
    },
    amount:{
        type:Number,
        required:[true,"Amount should be entered"]
    },
})
const Donation = mongoose.model("Donation",donationSchema);
export default Donation;