const Member = require('../models/members.cjs')

const getMembers = async (req, res) => {
  const members = await Member.findAll()
  if (members) {
    res.status(200).json({ members })
    // console.log(users);
  }
  return
}

const addMember = async (req, res) => {
  const member = await Member.create(req.body)
  res.status(201).json({ member })
}

const getMember = async (req, res) => {
  const { id } = req.params
  const member = await Member.findByPk({ id: id })
  if (!member) {
    return res.json({message: 'No member found'})
  }
  res.status(200).json({ member })
}

const updateMember = async (req, res) => {
  const { id } = req.params
  const member = await Member.upsert(id, req.body)
  res.status(200).json({ member })
}

const removeMember = async (req, res) => {
  const { id } = req.params
  const member = await Member.destroy(id)
  if (!member) {
    return
  }
  res.status(200).json({ member })
}

module.exports = {
  getMembers,
  addMember,
  getMember,
  updateMember,
  removeMember,
}