// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getPayments, addPayment, getPayment, updatePayment, removePayment} = require('../controller/payments.cjs')

router.route('/').get(getPayments).post(addPayment)
router.route('/:id').get(getPayment).patch(updatePayment).delete(removePayment)

module.exports = router