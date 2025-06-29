
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()
const connectDb = async()=>{
    try{
         console.log("MONGO URL:", process.env.MONGODB_URL);
        const connect  = await mongoose.connect(process.env.MONGODB_URL, {});
        // const connect  = await mongoose.connect(MONGODB_URL, {});
        console.log("Db Connected")
    }
    catch(err){
        console.log(err)
        console.log(process.env.MONGODB_URL)
        process.exit(1);
    }
}
export default connectDb;
