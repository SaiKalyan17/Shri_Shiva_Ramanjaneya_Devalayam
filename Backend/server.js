import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import adminRouter from './Routes/adminRoutes.js';
import userRouter from './Routes/userRoutes.js';
import connectDb from './config/dbConnection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1111;
app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
connectDb();
