// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getConferences, addConference, getConference, updateConference, removeConference} = require('../controller/conference.cjs')

router.route('/').get(getConferences).post(addConference)
router.route('/:id').get(getConference).patch(updateConference).delete(removeConference)

module.exports = router