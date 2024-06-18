import Obra from "../obra.schema.js"

const getObras = async () => {
  const obras = await Obra.find({}).toArray()
  return obras;
}

const postObra = async (nuevaObra) => {
  const newObra = await Obra.insertOne(nuevaObra)
  return newObra
}

export default {
  getObras, postObra
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