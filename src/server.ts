import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes';
import lecturerRoutes from './routes/lecturerRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!, { retryWrites: true, w: "majority" })
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

app.use(express.json());
app.use('/api/student', studentRoutes);
app.use('/api/lecturer', lecturerRoutes);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
