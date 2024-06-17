import MongoConnection from "../MongoConnection.js";

const getObras = async () => {
  const obras = await MongoConnection.db.collection("obras").find({}).toArray()
  return obras;
}

const postObra = async (nuevaObra) => {
  const newObra = await MongoConnection.db.collection("obras").insertOne(nuevaObra)
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