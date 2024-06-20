import mongoose, { Collection } from 'mongoose'
const Schema = mongoose.Schema;

const user = new Schema({
  username: String,
  name: String,
  lastname: String,
  technique: String,
  image: String,
  culture: String,
  url: String,
  division: String,
  date: { type: Date, default: Date.now },
  collections: Collection
});

export default mongoose.model('User', user);
