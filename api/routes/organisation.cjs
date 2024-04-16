// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getOrganisations, addOrganisation, getOrganisation, updateOrganisation, removeOrganisation} = require('../controller/organisation.cjs')

router.route('/').get(getOrganisations).post(addOrganisation)
router.route('/:id').get(getOrganisation).patch(updateOrganisation).delete(removeOrganisation)

module.exports = router