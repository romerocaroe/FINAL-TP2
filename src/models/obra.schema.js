import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const obra = new Schema({
  title: { type: String, required: true },
  description: String,
  author: String,
  technique: String,
  image: { type: String, required: true },
  culture: String,
  url: String,
  division: String,
  date: Date
});

export default obra