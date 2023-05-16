import mongoose, { Schema, Document } from "mongoose";

export interface IResult extends Document {
  studentId: string;
  BatchID: string;
  FacultyId: string;
  DegreeID: string;
  Type: string;
  Marks: string;
}

const ResultSchema: Schema = new mongoose.Schema({
  studentId: { type: String, required: true },
  BatchID: { type: String, required: true },
  FacultyId: { type: String, required: true },
  DegreeID: { type: String, required: true },
  Type: { type: String, required: true },
  Marks: { type: String, required: true },
});

export default mongoose.model<IResult>("Result", ResultSchema);
