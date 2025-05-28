import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  description: {type: String, required: true},
  completed: {type: Boolean,default: false},
  eventId: {type: mongoose.Schema.Types.ObjectId,ref: 'Event',required: true}
});

export default mongoose.model('Task', taskSchema);
