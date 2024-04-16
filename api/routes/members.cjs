// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getMembers, addMember, getMember, updateMember, removeMember} = require('../controller/members.cjs')

router.route('/').get(getMembers).post(addMember)
router.route('/:id').get(getMember).patch(updateMember).delete(removeMember)

module.exports = router