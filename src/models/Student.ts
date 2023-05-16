import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  nic: { type: String, required: true },
  faculty: { type: String, required: true },
  dob: { type: Date, required: true },
  degree: { type: String, required: true },
  batch: { type: String, required: true },
});

export default mongoose.model('Student', StudentSchema);
