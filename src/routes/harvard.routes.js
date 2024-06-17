import express from 'express'
import controller from '../controllers/harvard.controller.js'

const router = express.Router()

//Todas las notas
router.get("/harvard", controller.getharvard)
//Promedio
router.get("/harvard/promedio", controller.getPromedioHarvard)
router.post("/harvard", controller.postHarvard)
router.put("/harvard/modificar/:id", controller.modificarHarvard)
router.delete("/harvard/borrar/:id", controller.borrarHarvard)

export default router