import express from 'express'
import controller from '../controllers/gallery.controller.js'
import collectionController from '../controllers/collection.controller.js'

const router = express.Router()

router.get("/gallery", controller.getObras)
router.post("/gallery", controller.postObra)
router.put("/gallery/modificar/:id", controller.updateObra)
router.delete("/gallery/borrar/:id", controller.deleteObra)

router.get("/collection", collectionController.getCollections)
router.post("/collection", collectionController.postCollection)
router.put("/collection/modificar/:id", collectionController.updateCollection)
router.delete("/collection/borrar/:id", collectionController.deleteCollection)


export default router