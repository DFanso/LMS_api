import mongoose from 'mongoose';

const lecturerSchema = new mongoose.Schema({
  staffId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },
  faculty: { type: String, required: true },
  role: { type: String, required: true },
  nic: { type: String, required: true }
});

export default mongoose.model('Lecturer', lecturerSchema);
