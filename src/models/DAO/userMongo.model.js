import mongoose from 'mongoose'
import user from "../user.schema.js"

const User = mongoose.model('User', user);

const getUsers = async () => {
  const Users = await User.find({})
  return Users;
}

const getUserByUsername = async (username, password) => {
  const UserFinded = await User.find({ username: username, password: password})
  return UserFinded;
}

const postUser = async (nuevaUser) => {
  const newUser = await User.create(nuevaUser)
  return newUser
}

const updateUser = async (id, actualizacionUser) => {
    await User.updateOne({_id: id}, actualizacionUser)
    return actualizacionUser
}

const deleteUser = async (id) => {
    await User.deleteOne({ _id: id})
    return "User eliminado correctamente"
}

export default {
  getUsers, getUserByUsername, postUser, updateUser, deleteUser
}