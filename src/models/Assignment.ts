import mongoose from "mongoose";

interface IAssignment extends mongoose.Document {
  title: string;
  batch: string;
  degree: string;
  moduleName: string;
  category: string;
  filePath: string;
}

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  batch: { type: String, required: true },
  degree: { type: String, required: true },
  moduleName: { type: String, required: true },
  category: { type: String, required: true },
  filePath: { type: String, required: true }
});

const Assignment = mongoose.model<IAssignment>("Assignment", AssignmentSchema);

export { Assignment, IAssignment };
