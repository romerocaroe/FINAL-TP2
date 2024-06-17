import express from 'express'
import controller from '../controllers/harvard.controllers.js'

const router = express.Router()

router.get("/harvard", controller.getObras)
router.post("/harvard", controller.postObra)
router.put("/harvard/update/:id", controller.updateObra)
router.delete("/harvard/delete/:id", controller.deleteObra)

export default router;