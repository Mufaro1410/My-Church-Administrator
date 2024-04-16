const Section = require('../models/section.cjs')

const getSections = async (req, res) => {
  const sections = await Section.findAll()
  if (sections) {
    res.status(200).json({ sections })
  }
  return
}

const addSection = async (req, res) => {
  const section = await Section.create(req.body)
  res.status(201).json({ section })
}

const getSection = async (req, res) => {
  const { id } = req.params
  const section = await Section.findByPk({ id: id })
  if (!section) {
    return res.json({message: 'No section found'})
  }
  res.status(200).json({ section })
}

const updateSection = async (req, res) => {
  const { id } = req.params
  const section = await Section.upsert(id, req.body)
  res.status(200).json({ section })
}

const removeSection = async (req, res) => {
  const { id } = req.params
  const section = await Section.destroy(id)
  if (!section) {
    return
  }
  res.status(200).json({ section })
}

module.exports = {
  getSections,
  addSection,
  getSection,
  updateSection,
  removeSection,
}