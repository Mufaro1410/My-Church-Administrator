// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getReports, addReport, getReport, updateReport, removeReport} = require('../controller/report.cjs')

router.route('/').get(getReports).post(addReport)
router.route('/:id').get(getReport).patch(updateReport).delete(removeReport)

module.exports = router