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
    actualizacionCollection.id = id
    const index = Collection.findIndex((collection) => collection.id === Number(id))
    Collection.splice(index, 1, actualizacionCollection)
    return actualizacionCollection
}

const deleteCollection = async (id) => {
    const index = Collection.findIndex((collection) => collection.id === Number(id))
    if (index === -1) {
        throw new Error("Id inexistente")
    } else {
        Collection.splice(index, 1)
        return "Collection eliminada correctamente"
    }
}

export default {
  getCollections, postCollection, updateCollection, deleteCollection
}