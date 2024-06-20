import express from 'express'
import controller from '../controllers/gallery.controller.js'

const router = express.Router()

router.get("/gallery", controller.getObras)
router.post("/gallery", controller.postObra)
router.put("/gallery/modificar/:id", controller.updateObra)
router.delete("/gallery/borrar/:id", controller.deleteObra)

export default router