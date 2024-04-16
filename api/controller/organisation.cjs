const Organisation = require('../models/organisation.cjs')

const getOrganisations = async (req, res) => {
  const organisations = await Organisation.findAll()
  if (organisations) {
    res.status(200).json({ organisations })
  }
  return
}

const addOrganisation = async (req, res) => {
  const organisation = await Organisation.create(req.body)
  res.status(201).json({ organisation })
}

const getOrganisation = async (req, res) => {
  const { id } = req.params
  const organisation = await Organisation.findByPk({ id: id })
  if (!organisation) {
    return res.json({message: 'No organisation found'})
  }
  res.status(200).json({ organisation })
}

const updateOrganisation = async (req, res) => {
  const { id } = req.params
  const organisation = await Organisation.upsert(id, req.body)
  res.status(200).json({ organisation })
}

const removeOrganisation = async (req, res) => {
  const { id } = req.params
  const organisation = await Organisation.destroy(id)
  if (!organisation) {
    return
  }
  res.status(200).json({ organisation })
}

module.exports = {
  getOrganisations,
  addOrganisation,
  getOrganisation,
  updateOrganisation,
  removeOrganisation,
}