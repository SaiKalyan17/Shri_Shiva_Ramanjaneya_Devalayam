
// import mongoose from "mongoose";

// const godSchema = mongoose.Schema({

//     name:{
//         type:String,
//         required:[true,"Name should be entered"]
//     },
//     description:{
//         type:String,
//         required:[true,"Description is required"]
//     }
// })
// const God = mongoose.model("God",godSchema)
// export default God;



import mongoose from "mongoose";

const godSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name should be entered"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    }
})
const God = mongoose.model("God",godSchema)
export default God;
