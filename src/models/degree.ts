import { Schema, model } from 'mongoose';

const degreeSchema = new Schema({
  name: { type: String, required: true },
});

const Degree = model('Degree', degreeSchema);

export default Degree;
