import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const obra = new Schema({
  idObra: ObjectId,
  title: String,
  description: String,
  author: String,
  technique: String,
  image: String,
  culture: String,
  url: String,
  division: String,
  date: Date
});

export default mongoose.model('Obra', obra);
