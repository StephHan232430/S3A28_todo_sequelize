const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Todo = db.Todo
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  res.send('列出所有todo')
})

module.exports = router