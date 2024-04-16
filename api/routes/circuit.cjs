// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getCircuits, addCircuit, getCircuit, updateCircuit, removeCircuit} = require('../controller/circuit.cjs')

router.route('/').get(getCircuits).post(addCircuit)
router.route('/:id').get(getCircuit).patch(updateCircuit).delete(removeCircuit)

module.exports = router