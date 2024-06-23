import service from '../services/users.services.js'

const getUsers = async (req, res) => {
    try {
        const users = await service.getUsers()
        console.log(users)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username, password } = req.params
        const users = await service.getUserByUsername(username, password)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

const postUser = async (req, res) => {
    try {
        const nuevoUser = req.body
        const users = await service.postUser(nuevoUser)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const actualizacionUsuario = req.body
        const users = await service.updateUser(id, actualizacionUsuario)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }

}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const users = await service.deleteUser(id)
        res.send(users)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ statusCode: 500, message: "Internal server error." });
    }
}

export default {
    getUsers, getUserByUsername, updateUser, postUser, deleteUser 
}