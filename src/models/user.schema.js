import mongoose from 'mongoose'
import collection from './collection.schema.js'
import obra from './obra.schema.js'
const Schema = mongoose.Schema;

const user = new Schema({
  username: String,
  name: String,
  lastname: String,
  mail: String,
  password: String,
  collections: [collection],
  likes: [obra]
});

export default user
