//import ModelFactory from "../models/DAO/Factory.js";
//import config from "../../config.js";
import gallery from "../models/DAO/galleryMongo.model.js"

//Chequear el tema del modelo, usamos DAO, Factory, todo eso?
//Consultar sobre esto, no se cómo hacerlo sin clases:      
/*constructor() {
      this.model = ModelFactory.get(config.PERSISTENCE);
} 

Es así como está abajo?
*/

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