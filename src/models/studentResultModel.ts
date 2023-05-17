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
  StudentId: { type: String, required: true },
  BatchName: { type: String, required: true },
  FacultyName: { type: String, required: true },
  DegreeName: { type: String, required: true },
  ModuleName: { type: String, required: true },
  Type: { type: String, required: true },
  Marks: { type: String, required: true },
});

export default mongoose.model<IResult>("Result", ResultSchema);
