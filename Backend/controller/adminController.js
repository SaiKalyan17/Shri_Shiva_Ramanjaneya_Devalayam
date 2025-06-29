
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import twilio from 'twilio';
import Auth from '../model/authModel.js';
import Donation from '../model/donationModel.js';
import Event from '../model/eventModel.js';
import God from '../model/godModel.js';
import Query from '../model/queryModel.js';

export const registerAdmin = async (req, res) => {
    const { userName, mobileNumber, password,role } = req.body;
    try {
        if (!userName || !mobileNumber || !password || !role) {
            return res.status(400).json({ message: "Please enter all fields", statuscode: 400 });
        }
        const adminAvailable = await Auth.findOne({ mobileNumber });
        if (adminAvailable) {
            return res.status(400).json({ message: "User already exists. Please login.", statuscode: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const registeradmin = await Auth.create({
            userName,
            mobileNumber,
            password: hashedPassword,
            role
        });
        res.status(201).json({
            userName: registeradmin.userName,
            password: password
        });

    } catch (err) {
        res.status(500).json({ message: err.message || err, statuscode: 500 });
    }
};
export const loginAdmin = async (req,res)=>{
    try{
        const {mobileNumber, password} = req.body
        if(!mobileNumber || !password){
            return res.status(400).json({Message: "Please Enter all Fields"})
        }
        console.log("Check point 1")
        const user = await Auth.findOne({mobileNumber})
        if (!user) {
            return res.status(404).json({ message: "Admin not found", statusCode: 404 });
        }
        console.log("Check point 2")
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials", statusCode: 401 });
        }
        console.log("Check point 3")
        const token = (userId, role) => {
            return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
                expiresIn: "1d",
               
            });
        };
        const acctoken = token()
        console.log("Check point 5")
    res.status(200).json({
        message: "Login successful",
        acctoken,
        user: {
          id: user._id,
          userName: user.userName,
          mobileNumber: user.mobileNumber,
          role: user.role
        }
      });
      console.log("Check point 6")

    }catch(err){
        res.status(500).json({message: "Internal Server Issue"})
    }
};
export const CurrentAdmin = (req,res)=>{
    try{
        res.json(req.user)
    }catch(err){
        res.end(err)
    }
};
export const createEvent = async(req,res)=>{
    const {eventName,date,description} = req.body;
    try{
        console.log(eventName,date,description)
        if(!eventName || !date || !description){
            return res.status(400).json({
                message: " Please Provide all Fields",
                statuscode: 400,})
        }
        const event = await Event.create({
            eventName,date,description
        })
        res.status(200).json({event})
        console.log(eventName,date,description)
    }catch(err){
        res.status(500).json({message: "Internal server Error", error : err.message})
    }
};
export const deleteEvent = async (req,res)=>{
    try{
        console.log(req.params.id)
        const deletedEvent = await Event.findByIdAndDelete(req.params.id)
        if(!deletedEvent){
            return res.status(404).json({ 
                message:'Contact Not Found', 
                statusCode: 404})
        }
        res.status(200).json({ 
            message: "Data Deleted", 
            deletedEvent
            
        })
    }
    catch(err){
        res.status(500).json({ message: "Server error", error: error.message })
    }
};
export const updateEvent = async(req,res)=>{
    try{
        const event = await Event.findById(req.params.id)
        if (!event) {
            return res.status(404).json({ status: 404, message: "Event Not Found" });
        }
        const updatedData = await Event.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true });
        if (!updatedData) {
            return res.status(500).json({ message: "Failed to update contact" });
        }
        res.status(200).json({ message: "Event updated successfully", updatedContact: updatedData });

    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
export const getAllQueries =  async(req,res)=>{
    try{
        const queryData = await Query.find({})
        res.status(200).json(queryData)
    }
    catch{
        res.status(500).json({message:'Internal Server Error',error: err.message})
    }
};
export const answerQuery = async (req, res) => {
    try {
        // Initialize Twilio Client
        const client = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
        );

        // Fetch query
        const querydata = await Query.findById(req.params.id);
        if (!querydata || querydata.answer) {
            return res.status(400).json({
                message: "Query already answered or not found"
            });
        }

        // Update query with answer
        const updatedQueryData = await Query.findByIdAndUpdate(
            req.params.id,
            {
                answer: {
                    answeredBy: req.body.answeredBy,
                    answer: req.body.answer
                }
            },
            { new: true }
        );

        console.log("Check point 1");

        // Validate and format mobile number
        const mobileNumber = querydata.mobileNumber?.toString().replace(/\D/g, '');
        if (!mobileNumber || mobileNumber.length !== 10) {
            return res.status(400).json({ message: "Invalid mobile number format" });
        }

        console.log("Mobile Number:", mobileNumber);

        // Send SMS using Twilio
        await client.messages.create({
            body: `Your query has been answered: ${req.body.answer}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${mobileNumber}`
        });

        console.log("Check point 2");

        res.status(200).json({
            message: "Query answered successfully",
            updatedQueryData
        });

    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

export const createGotDetails = async(req,res)=>{
    const {name,description} = req.body
    if(!name || !description){
        return res.status(400).json({ message: "Please enter all fields", statuscode: 400 });
    }
    const gotData = God.create({
        name,
        description,
    })
    res.status(201).json({
        message:"Succesfully created God data",
        name,
        description,
        statusCode:201
    })
}

export const getDonations = async(req,res)=>{
    try{
        const donationData = await Donation.find({})
        res.status(200).json(donationData);
    }catch(err){
        res.status(500).json({message:'Internal Server Error',error: err.message}) 
    }
}