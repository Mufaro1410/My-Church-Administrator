const Circuit = require('../models/circuit.cjs')

const getCircuits = async (req, res) => {
  const circuits = await Circuit.findAll()
  if (circuits) {
    res.status(200).json({ circuits })
    // console.log(users);
  }
  return
}

const addCircuit = async (req, res) => {
  const circuit = await Circuit.create(req.body)
  res.status(201).json({ circuit })
}

const getCircuit = async (req, res) => {
  const { id } = req.params
  const circuit = await Circuit.findByPk({ id: id })
  if (!circuit) {
    return res.json({message: 'No circuit found'})
  }
  res.status(200).json({ circuit })
}

const updateCircuit = async (req, res) => {
  const { id } = req.params
  const circuit = await Circuit.upsert(id, req.body)
  res.status(200).json({ circuit })
}

const removeCircuit = async (req, res) => {
  const { id } = req.params
  const circuit = await Circuit.destroy(id)
  if (!circuit) {
    return
  }
  res.status(200).json({ circuit })
}

module.exports = {
  getCircuits,
  addCircuit,
  getCircuit,
  updateCircuit,
  removeCircuit,
}