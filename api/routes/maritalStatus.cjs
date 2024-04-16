// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getMaritalStatuses, addMaritalStatus, getMaritalStatus, updateMaritalStatus, removeMaritalStatus} = require('../controller/maritalStatus.cjs')

router.route('/').get(getMaritalStatuses).post(addMaritalStatus)
router.route('/:id').get(getMaritalStatus).patch(updateMaritalStatus).delete(removeMaritalStatus)

module.exports = router