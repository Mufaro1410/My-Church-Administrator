// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getSections, addSection, getSection, updateSection, removeSection} = require('../controller/section.cjs')

router.route('/').get(getSections).post(addSection)
router.route('/:id').get(getSection).patch(updateSection).delete(removeSection)

module.exports = router