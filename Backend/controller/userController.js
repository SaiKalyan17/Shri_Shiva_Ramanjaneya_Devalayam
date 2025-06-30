
import Donation from '../model/donationModel.js';
import Event from '../model/eventModel.js';
import God from '../model/godModel.js';
import Query from '../model/queryModel.js';
//Get all details
export const getAllGodDetails = async(req,res)=>{
    try{
        const gotData = await God.find({})
        res.status(200).json(gotData)
    }
    catch{
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
}
//Get single got detail
export const getGodDetail = async(req,res)=>{
    try{
        const gotData = await God.findById(req.params.id)
        res.status(200).json(gotData)
    }
    catch{
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
}
export const getEvent = async(req,res)=>{
    try{
        const eventdata = await Event.findById(req.params.id)
        if(!eventdata){
            return res.status(400).json({message: "Event not found",statuscode: 400,})
        }
        res.status(200).json(eventdata)
    }
    catch(err){
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
}
export const getAllEvents = async(req,res)=>{
    try{
        const eventdata = await Event.find({})
        res.status(200).json(eventdata)
    }
    catch{
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
}
export const raiseQuery = async(req,res)=>{
    const {name,mobileNumber,Inquiry} = req.body
    try{
        //console.log("check point 1")
        if(!name || !mobileNumber || !Inquiry){
            return res.status(400).json({
                message: " Please Provide all Fields",
                statuscode: 400,})
        }
        //console.log("check point 2")
        const query = await Query.create({name,mobileNumber,Inquiry})
        //console.log("check point 3")
        res.status(201).json({
            message:"Query is uploaded will resolved quickly",
            statusCode:201,
            data:query
        })
        console.log(query)
    }
    catch(err){
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
}
export const postDonation = async(req,res)=>{
    
    try{
        const {name,mobileNumber,amount} = req.body;
    if(!name || !mobileNumber || !amount){
         return res.status(400).json({
                message: " Please Provide all Fields",
                statuscode: 400,})
    }
    const donation =await Donation.create({name,mobileNumber,amount});
    res.status(201).json({
            message:"Thank you ",
            statusCode:201,
            name,
            amount,
        })
    }
    catch(err){
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
}
