// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getDistricts, addDistrict, getDistrict, updateDistrict, removeDistrict} = require('../controller/district.cjs')

router.route('/').get(getDistricts).post(addDistrict)
router.route('/:id').get(getDistrict).patch(updateDistrict).delete(removeDistrict)

module.exports = router