const User = require('../models/user.model')
const { validationResult } = require("express-validator");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).send({
            data: users,
        })
    } catch (error) {
        res.status(400).send({ message: 'Bad request' })
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (user === false) {
            return res.status(404).send({ message: 'User not found' })
        }

        return res.status(200).send({
            data: user,
        })
    } catch (error) {
        res.status(400).send({ message: 'Bad request' })
    }
}

const createUsers = async (req, res) => {
    try {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()[0],
            });
        }

        const { firstName, lastName, age } = req.body
        const user = new User(firstName, lastName, age)

        await user.save()

        return res.status(201).send({
            message: 'Successfully created a user.',
        });
    } catch (error) {
        res.status(400).send({ message: 'Bad request' })
    }
}


const updateUser = async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, age } = req.body;

    if (!firstName || !firstName.trim() || !lastName || !lastName.trim() || age == null || age < 0)
        return res.status(400).send({ statusCode: 400, statusMessage: 'Bad Request', message: null, data: null });

    try {
        await User.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            message: 'Successfully updated a user.',
        });
    } catch (err) {
        res.status(400).send({ message: 'Bad request' })
    }
};


const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.send({
            message: 'Successfully deleted a user.',
        });
    } catch (err) {
        res.status(400).send({ message: 'Bad request' })
    }
};


module.exports = {
    getUsers,
    createUsers,
    updateUser,
    deleteUser,
    getUser,
}