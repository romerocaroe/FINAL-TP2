import mongoose from 'mongoose'
import user from "../user.schema.js"

const User = mongoose.model('User', user);

const getUsers = async () => {
  const Users = await User.find({}) //.toArray()
  return Users;
}

const postUser = async (nuevaUser) => {
  const newUser = await User.insertMany(nuevaUser)
  return newUser
}

const updateUser = async (id, actualizacionUser) => {
    actualizacionUser.id = id
    const index = User.findIndex((user) => user.id === Number(id))
    User.splice(index, 1, actualizacionUser)
    return actualizacionUser
}

const deleteUser = async (id) => {
    const index = User.findIndex((user) => user.id === Number(id))
    if (index === -1) {
        throw new Error("Id inexistente")
    } else {
        User.splice(index, 1)
        return "User eliminada correctamente"
    }
}

export default {
  getUsers, postUser, updateUser, deleteUser
}