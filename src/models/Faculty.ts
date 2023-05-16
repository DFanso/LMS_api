import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model('Faculty', facultySchema);
