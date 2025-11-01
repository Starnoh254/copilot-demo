const express = require('express');
const router = express.Router();

let users = []

router.post('/add', (req, res) => {
    const user = req.body
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
