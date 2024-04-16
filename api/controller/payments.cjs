const Payment = require('../models/payment.cjs')

const getPayments = async (req, res) => {
  const payments = await Payment.findAll()
  if (payments) {
    res.status(200).json({ payments })
  }
  return
}

const addPayment = async (req, res) => {
  const payment = await Payment.create(req.body)
  res.status(201).json({ payment })
}

const getPayment = async (req, res) => {
  const { id } = req.params
  const payment = await Payment.findByPk({ id: id })
  if (!payment) {
    return res.json({message: 'No payment found'})
  }
  res.status(200).json({ payment })
}

const updatePayment = async (req, res) => {
  const { id } = req.params
  const payment = await Payment.upsert(id, req.body)
  res.status(200).json({ payment })
}

const removePayment = async (req, res) => {
  const { id } = req.params
  const payment = await Payment.destroy(id)
  if (!payment) {
    return
  }
  res.status(200).json({ payment })
}

module.exports = {
  getPayments,
  addPayment,
  getPayment,
  updatePayment,
  removePayment,
}