import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  fullName: String,
  tempoText: String
});
export default mongoose.model('Tempo', Schema);
