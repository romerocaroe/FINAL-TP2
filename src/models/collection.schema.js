import mongoose from 'mongoose'
import obra from './obra.schema.js'
const Schema = mongoose.Schema;

const collection = new Schema({
  title: String,
  obras: [obra]
});

export default mongoose.model('Collection', collection);
