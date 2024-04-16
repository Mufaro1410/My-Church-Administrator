const MaritalStatus = require('../models/maritalStatus.cjs')

const getMaritalStatuses = async (req, res) => {
  const maritalStatuses = await MaritalStatus.findAll()
  if (maritalStatuses) {
    res.status(200).json({ maritalStatuses })
  }
  return
}

const addMaritalStatus = async (req, res) => {
  const maritalStatus = await MaritalStatus.create(req.body)
  res.status(201).json({ maritalStatus })
}

const getMaritalStatus = async (req, res) => {
  const { id } = req.params
  const maritalStatus = await MaritalStatus.findByPk({ id: id })
  if (!maritalStatus) {
    return res.json({message: 'No maritalStatus found'})
  }
  res.status(200).json({ maritalStatus })
}

const updateMaritalStatus = async (req, res) => {
  const { id } = req.params
  const maritalStatus = await MaritalStatus.upsert(id, req.body)
  res.status(200).json({ maritalStatus })
}

const removeMaritalStatus = async (req, res) => {
  const { id } = req.params
  const maritalStatus = await MaritalStatus.destroy(id)
  if (!maritalStatus) {
    return
  }
  res.status(200).json({ maritalStatus })
}

module.exports = {
  getMaritalStatuses,
  addMaritalStatus,
  getMaritalStatus,
  updateMaritalStatus,
  removeMaritalStatus,
}