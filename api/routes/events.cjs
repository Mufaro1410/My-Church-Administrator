// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getEvents, addEvent, getEvent, updateEvent, removeEvent} = require('../controller/events.cjs')

router.route('/').get(getEvents).post(addEvent)
router.route('/:id').get(getEvent).patch(updateEvent).delete(removeEvent)

module.exports = router