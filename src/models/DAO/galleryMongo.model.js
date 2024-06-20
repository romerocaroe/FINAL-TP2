import Obra from "../obra.schema.js"

/* const getObrasHarvard = async () => {
  axios
    .get(process.env.API_HARVARD)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
} */

const getObras = async () => {
  const obras = await Obra.find({}).toArray()
  if(obras.length <= 0){
    await getObrasHarvard()
  }
  return obras;
}

const postObra = async (nuevaObra) => {
  const newObra = await Obra.insertOne(nuevaObra)
  return newObra
}

const updateObra = async (id, actualizacionObra) => {
    actualizacionObra.id = id
    const index = Obra.findIndex((obra) => obra.id === Number(id))
    Obra.splice(index, 1, actualizacionObra)
    return actualizacionObra
}

const deleteObra = async (id) => {
    const index = Obra.findIndex((obra) => obra.id === Number(id))
    if (index === -1) {
        throw new Error("Id inexistente")
    } else {
        Obra.splice(index, 1)
        return "Obra eliminada correctamente"
    }
}

export default {
  getObras, postObra, updateObra, deleteObra
}

/* Hacer update y delete */


/**
 * 
 * division (string)
id ()
primaryimageurl (string)
technique (string)
description (string)
title (string)
dated (string)
culture 
url ()string

author (people.name)(string)
 */