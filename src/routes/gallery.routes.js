import express from 'express'
import controllerGallery from '../controllers/gallery.controller.js'
import controllerUsers from '../controllers/users.controller.js'

const router = express.Router()

router.get("/gallery", controllerGallery.getObras)
router.post("/gallery", controllerGallery.postObra)
router.put("/gallery/modificar/:id", controllerGallery.updateObra)
router.delete("/gallery/borrar/:id", controllerGallery.deleteObra)

router.get("/users", controllerUsers.getUsers)
router.post("/users", controllerUsers.postUser)
router.put("/users/modificar/:id", controllerUsers.updateUser)
router.delete("/users/borrar/:id", controllerUsers.deleteUser)

export default router