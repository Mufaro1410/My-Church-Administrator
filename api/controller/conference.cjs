const Conference = require('../models/conference.cjs')

const getConferences = async (req, res) => {
  const conferences = await Conference.findAll()
  if (conferences) {
    res.status(200).json({ conferences })
    // console.log(users);
  }
  return
}

const addConference = async (req, res) => {
  const conference = await Conference.create(req.body)
  res.status(201).json({ conference })
}

const getConference = async (req, res) => {
  const { id } = req.params
  const conference = await Conference.findByPk({ id: id })
  if (!conference) {
    return res.json({message: 'No conference found'})
  }
  res.status(200).json({ conference })
}

const updateConference = async (req, res) => {
  const { id } = req.params
  const conference = await Conference.upsert(id, req.body)
  res.status(200).json({ conference })
}

const removeConference = async (req, res) => {
  const { id } = req.params
  const conference = await Conference.destroy(id)
  if (!conference) {
    return
  }
  res.status(200).json({ conference })
}

module.exports = {
  getConferences,
  addConference,
  getConference,
  updateConference,
  removeConference,
}