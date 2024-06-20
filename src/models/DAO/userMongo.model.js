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
    const log = await User.updateOne({_id: id}, actualizacionUser)
    console.log(log);
    return actualizacionUser
}

const deleteUser = async (id) => {
    const log = await User.deleteOne(({ _id: id}))
    console.log(log);
    return "User eliminado correctamente"
}

export default {
  getUsers, postUser, updateUser, deleteUser
}