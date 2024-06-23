import express from 'express'
import collectionController from '../controllers/collection.controller.js'
import controllerGallery from '../controllers/gallery.controller.js'
import controllerUsers from '../controllers/users.controller.js'

const router = express.Router()

//TP2
router.get("/obra", controllerGallery.getObras)
router.get("/obra/:id", controllerGallery.getObraById)
router.post("/obra", controllerGallery.postObra)
router.put("/obra/:id", controllerGallery.updateObra)
router.delete("/obra/:id", controllerGallery.deleteObra)

//PNT2
router.get("/usuario", controllerUsers.getUsers)
router.get("/usuario/:username-:password", controllerUsers.getUserByUsername)
router.post("/usuario", controllerUsers.postUser)
router.put("/usuario/:id", controllerUsers.updateUser)
router.delete("/usuario/:id", controllerUsers.deleteUser)

/* router.patch("/usuario/coleccion/:idUsuario-:idCollection-:idObra", controllerUsers.addObraToCollection)//TODO: pasar data al body
router.patch("/usuario/likes/:idUsuario-:idObra", controllerUsers.addObraToLike)//TODO: pasar data al body
router.patch("/usuario/coleccion/:idUsuario-:idCollection-:idObra", collectionController.deleteObraFromCollection) //TODO:
router.patch("/usuario/likes/:idUsuario-:idObra", collectionController.deleteObraFromLikes) //TODO: pasar data al body */

router.get("/coleccion", collectionController.getCollections)
router.get("/coleccion/:id", collectionController.getCollectionById)
router.post("/coleccion", collectionController.postCollection)
router.put("/coleccion/:id", collectionController.updateCollection)
router.delete("/coleccion/:id", collectionController.deleteCollection)


export default router