import express from 'express'
import collectionController from '../controllers/collection.controller.js'
import controllerGallery from '../controllers/gallery.controller.js'
import controllerUsers from '../controllers/users.controller.js'

const router = express.Router()

router.get("/obra", controllerGallery.getObras)
router.post("/obra", controllerGallery.postObra)
router.put("/obra/:id", controllerGallery.updateObra)
router.delete("/obra/:id", controllerGallery.deleteObra)

router.get("/usuario", controllerUsers.getUsers)
router.post("/usuario", controllerUsers.postUser)
router.put("/usuario/:id", controllerUsers.updateUser)
router.delete("/usuario/:id", controllerUsers.deleteUser)

router.get("/coleccion", collectionController.getCollections)
router.post("/coleccion", collectionController.postCollection)
router.put("/coleccion/:id", collectionController.updateCollection)
router.delete("/coleccion/:id", collectionController.deleteCollection)


export default router