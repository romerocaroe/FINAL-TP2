//import ModelFactory from "../models/DAO/Factory.js";
//import config from "../../config.js";
import gallery from "../models/DAO/galleryMongo.model.js"

//const model = ModelFactory.get(config.PERSISTENCE)

const getObras = async () => {
  const obras = await gallery.getObras()
  return obras
}

const postObra = async (nuevaObra) => {
  const obras = await gallery.postObra(nuevaObra)
  return obras
}

const updateObra = async (id, actualizacionObra) => {
  const obras = await gallery.updateObra(id, actualizacionObra)
  return obras
}

const deleteObra = async (id) => {
  const obras = await gallery.deleteObra(id)
  return obras
}

export default {
  getObras, postObra, updateObra, deleteObra
}