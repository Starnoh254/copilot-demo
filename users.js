const express = require('express');
const Joi = require('joi');
const router = express.Router();

let users = []

router.post('/add', (req, res) => {
    const schema = Joi.object({
        id: Joi.required(),
        name: Joi.string().required()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        return res.status(400).send("Invalid user data: " + error.details[0].message);
    }
    const user = value;
    users.push(user)
    console.log("Added user", user)
    res.send("user added")
})

router.get('/list', (req, res) => {
    res.send(users)
})

router.get('/get', (req, res) => {
    const id = req.query.id
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            res.send(users[i])
        }
    }
})

module.exports = router
