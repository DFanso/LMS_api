import mongoose from 'mongoose';

const degreeBatchSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model('DegreeBatch', degreeBatchSchema);
