import express from 'express'
import controller from '../controllers/gallery.controller.js'

const router = express.Router()

router.get("/gallery", controller.getGallery)
router.post("/gallery", controller.postGallery)
router.put("/gallery/modificar/:id", controller.modificarGallery)
router.delete("/gallery/borrar/:id", controller.borrarGallery)

export default router