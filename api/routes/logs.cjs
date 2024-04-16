// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getLogs, addLog, getLog, updateLog, removeLog} = require('../controller/logs.cjs')

router.route('/').get(getLogs).post(addLog)
router.route('/:id').get(getLog).patch(updateLog).delete(removeLog)

module.exports = router