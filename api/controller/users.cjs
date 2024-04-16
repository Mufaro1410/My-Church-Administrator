const User = require('../models/user.cjs')

const getUsers = async (req, res) => {
  const users = await User.findAll()
  if (users) {
    res.status(200).json({ users })
    // console.log(users);
  }
  return
}

const addUser = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({ user })
}

const getUser = async (req, res) => {
  const { id } = req.params
  const user = await User.findByPk({ id: id })
  if (!user) {
    return res.json({message: 'No user found'})
  }
  res.status(200).json({ user })
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const user = await User.upsert(id, req.body)
  res.status(200).json({ user })
}

const removeUser = async (req, res) => {
  const { id } = req.params
  const user = await User.destroy(id)
  if (!user) {
    return
  }
  res.status(200).json({ user })
}

module.exports = {
  getUsers,
  addUser,
  getUser,
  updateUser,
  removeUser,
}