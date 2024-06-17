import service from '../services/harvard.services.js'

const getObras = async (req, res) => {
    try {
        const obras = await service.getObras()
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.send({ statusCode: 500, message: "Internal server error." });
    }

}

const postObra = async (req, res) => {
    try {
        const nuevaObra = req.body
        const obras = await service.postObra(nuevaObra)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.send({ statusCode: 500, message: "Internal server error." });
    }

}

const updateObra = async (req, res) => {
    try {
        const {id} = req.params
        const actualizacionObra = req.body
        const obras = await service.updateObra(id, actualizacionObra)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.send({ statusCode: 500, message: "Internal server error." });
    }

}

const deleteObra = async (req, res) => {
    try {
        const {id} = req.params
        const obras = await service.deleteObra(id)
        res.send(obras)
    } catch (error) {
        console.log("Error: ", error);
        res.send({ statusCode: 500, message: "Internal server error." });
    }

}

export default {
    getObras, postObra, updateObra, deleteObra
}
