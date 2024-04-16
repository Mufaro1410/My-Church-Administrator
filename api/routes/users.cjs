// import { Router } from 'express'
const { Router } = require('express');
const router = Router()

// import business logic
const { getUsers, addUser, getUser, updateUser, removeUser} = require('../controller/users.cjs')

router.route('/').get(getUsers).post(addUser)
router.route('/:id').get(getUser).patch(updateUser).delete(removeUser)

module.exports = router