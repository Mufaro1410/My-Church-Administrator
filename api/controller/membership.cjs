const Membership = require('../models/membership.cjs')

const getMemberships = async (req, res) => {
  const memberships = await Membership.findAll()
  if (memberships) {
    res.status(200).json({ memberships })
    // console.membership(users);
  }
  return
}

const addMembership = async (req, res) => {
  const membership = await Membership.create(req.body)
  res.status(201).json({ membership })
}

const getMembership = async (req, res) => {
  const { id } = req.params
  const membership = await Membership.findByPk({ id: id })
  if (!membership) {
    return res.json({message: 'No membership found'})
  }
  res.status(200).json({ membership })
}

const updateMembership = async (req, res) => {
  const { id } = req.params
  const membership = await Membership.upsert(id, req.body)
  res.status(200).json({ membership })
}

const removeMembership = async (req, res) => {
  const { id } = req.params
  const membership = await Membership.destroy(id)
  if (!membership) {
    return
  }
  res.status(200).json({ membership })
}

module.exports = {
  getMemberships,
  addMembership,
  getMembership,
  updateMembership,
  removeMembership,
}