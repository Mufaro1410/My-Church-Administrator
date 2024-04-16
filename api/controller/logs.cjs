const Log = require('../models/logs.cjs')

const getLogs = async (req, res) => {
  const logs = await Log.findAll()
  if (logs) {
    res.status(200).json({ logs })
    // console.log(users);
  }
  return
}

const addLog = async (req, res) => {
  const log = await Log.create(req.body)
  res.status(201).json({ log })
}

const getLog = async (req, res) => {
  const { id } = req.params
  const log = await Log.findByPk({ id: id })
  if (!log) {
    return res.json({message: 'No log found'})
  }
  res.status(200).json({ log })
}

const updateLog = async (req, res) => {
  const { id } = req.params
  const log = await Log.upsert(id, req.body)
  res.status(200).json({ log })
}

const removeLog = async (req, res) => {
  const { id } = req.params
  const log = await Log.destroy(id)
  if (!log) {
    return
  }
  res.status(200).json({ log })
}

module.exports = {
  getLogs,
  addLog,
  getLog,
  updateLog,
  removeLog,
}