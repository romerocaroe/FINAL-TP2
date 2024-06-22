import mongoose from 'mongoose'
import obra from "../obra.schema.js"

/* const getObrasHarvard = async () => {
  axios
    .get(process.env.API_HARVARD)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
} */

const Obra = mongoose.model('Obra', obra);

const getObras = async () => {
  const obras = await Obra.find({})
  return obras;
}

const getObraById = async (id) => {
  const obra = await Obra.findById({_id: id})
  return obra
}

const postObra = async (nuevaObra) => {
  const newObra = await Obra.create(nuevaObra)
  return newObra
}

const updateObra = async (id, actualizacionObra) => {
    await Obra.updateOne({_id: id}, actualizacionObra)
    return actualizacionObra
}

const deleteObra = async (id) => {
    await Obra.deleteOne({_id: id})
    return "Obra eliminada correctamente"
}

export default {
  getObras, getObraById, postObra, updateObra, deleteObra
}

