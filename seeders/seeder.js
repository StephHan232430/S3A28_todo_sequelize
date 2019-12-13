const db = require('../models')
const User = db.User
const Todo = db.Todo
const userSeeds = require('./user.json').users
const todoSeeds = require('./todo.json').items
const bcrypt = require('bcryptjs')

for (let uNum = 0; uNum < userSeeds.length; uNum++) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(userSeeds[uNum].password, salt, (err, hash) => {
      if (err) throw err
      userSeeds[uNum].password = hash
      User.create(userSeeds[uNum]).then(user => {
        for (let tNum = uNum * 3; tNum < (uNum + 1) * 3; tNum++) {
          Todo.create({
            name: todoSeeds[tNum].name,
            done: todoSeeds[tNum].done,
            UserId: user.id
          })
        }
      })
    })
  })
}

console.log('Seeded!')