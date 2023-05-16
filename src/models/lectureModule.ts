import mongoose from 'mongoose';

const lectureModuleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model('LectureModule', lectureModuleSchema);
