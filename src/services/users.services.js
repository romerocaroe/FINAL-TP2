import Users from "../models/DAO/userMongo.model.js"

const getUsers = async () => {
  const users = await Users.getUsers()
  return users
}

const getUserById = async (id) => {
  const users = await Users.getUserById(id)
  return users
}

const postUser = async (nuevoUser) => {
  const users = await Users.postUser(nuevoUser)
  return users
}

const updateUser = async (id, actualizacionUser) => {
  const users = await Users.updateUser(id, actualizacionUser)
  return users
}

const deleteUser = async (id) => {
  const users = await Users.deleteUser(id)
  return users
}

export default {
  getUsers, getUserById, postUser, updateUser, deleteUser
}