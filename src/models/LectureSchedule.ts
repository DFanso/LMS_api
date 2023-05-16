import mongoose, { Schema, Document } from 'mongoose';

export interface ILectureSchedule extends Document {
  faculty: string;
  degreeBatch: string;
  date: Date;
  startTime: string;
  endTime: string;
  lectureHall: string;
  lecturer: string;
  lectureModules: string;
}

const LectureScheduleSchema: Schema = new Schema({
  faculty: { type: String, required: true },
  degreeBatch: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  lectureHall: { type: String, required: true },
  lecturer: { type: String, required: true },
  lectureModules: { type: String, required: true },
  degree: { type: String, required: true },
});

export default mongoose.model<ILectureSchedule>('LectureSchedule', LectureScheduleSchema);