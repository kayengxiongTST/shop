const express = require('express')

const userController = require('../controllers/users.controller')

const router = express.Router()

router.get('/', userController.getUsers)
router.post('/', userController.createUsers)
router.route('/:id')
    .put(userController.updateUser)
    .delete(userController.deleteUser)
    .get(userController.getUser)

module.exports = router