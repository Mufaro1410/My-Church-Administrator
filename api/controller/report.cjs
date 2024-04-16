const Report = require('../models/report.cjs')

const getReports = async (req, res) => {
  const reports = await Report.findAll()
  if (reports) {
    res.status(200).json({ reports })
  }
  return
}

const addReport = async (req, res) => {
  const report = await Report.create(req.body)
  res.status(201).json({ report })
}

const getReport = async (req, res) => {
  const { id } = req.params
  const report = await Report.findByPk({ id: id })
  if (!report) {
    return res.json({message: 'No report found'})
  }
  res.status(200).json({ report })
}

const updateReport = async (req, res) => {
  const { id } = req.params
  const report = await Report.upsert(id, req.body)
  res.status(200).json({ report })
}

const removeReport = async (req, res) => {
  const { id } = req.params
  const report = await Report.destroy(id)
  if (!report) {
    return
  }
  res.status(200).json({ report })
}

module.exports = {
  getReports,
  addReport,
  getReport,
  updateReport,
  removeReport,
}