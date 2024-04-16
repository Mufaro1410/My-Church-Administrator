// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getMemberships, addMembership, getMembership, updateMembership, removeMembership} = require('../controller/membership.cjs')

router.route('/').get(getMemberships).post(addMembership)
router.route('/:id').get(getMembership).patch(updateMembership).delete(removeMembership)

module.exports = router