const express = require('express')

const userController = require('../controllers/users.controller')
const { userValidation } = require('../validations/user.validation')

const router = express.Router()

router.get('/', userController.getUsers)
router.post('/', userValidation, userController.createUsers)
router.route('/:id')
    .put(userController.updateUser)
    .delete(userController.deleteUser)
    .get(userController.getUser)

module.exports = router