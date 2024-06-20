import mongoose from 'mongoose'
import collection from "../collection.schema.js"

const Collection = mongoose.model('Collection', collection);

const getCollections = async () => {
  const Collections = await Collection.find({}) //.toArray()
  return Collections;
}

const postCollection = async (nuevaCollection) => {
  const newCollection = await Collection.insertMany(nuevaCollection)
  return newCollection
}

const updateCollection = async (id, actualizacionCollection) => {
  const log = await Collection.updateOne({_id: id}, actualizacionCollection)
  console.log(log);
  return actualizacionCollection
}

const deleteCollection = async (id) => {
  const log = await Collection.deleteOne(({ _id: id}))
  console.log(log);
  return "Collection eliminado correctamente"
}

export default {
  getCollections, postCollection, updateCollection, deleteCollection
}