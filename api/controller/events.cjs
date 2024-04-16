const Event = require('../models/events.cjs')

const getEvents = async (req, res) => {
  const events = await Event.findAll()
  if (events) {
    res.status(200).json({ events })
    // console.log(users);
  }
  return
}

const addEvent = async (req, res) => {
  const event = await Event.create(req.body)
  res.status(201).json({ event })
}

const getEvent = async (req, res) => {
  const { id } = req.params
  const event = await Event.findByPk({ id: id })
  if (!event) {
    return res.json({message: 'No event found'})
  }
  res.status(200).json({ event })
}

const updateEvent = async (req, res) => {
  const { id } = req.params
  const event = await Event.upsert(id, req.body)
  res.status(200).json({ event })
}

const removeEvent = async (req, res) => {
  const { id } = req.params
  const event = await Event.destroy(id)
  if (!event) {
    return
  }
  res.status(200).json({ event })
}

module.exports = {
  getEvents,
  addEvent,
  getEvent,
  updateEvent,
  removeEvent,
}