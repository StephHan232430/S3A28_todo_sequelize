const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Todo = db.Todo
const { authenticated } = require('../config/auth')

// 列出所有todo
router.get('/', authenticated, (req, res) => {
  res.redirect('/')
})

// 新增todo頁面
router.get('/new', authenticated, (req, res) => {
  return res.render('new')
})

// 新增todo
router.post('/', authenticated, (req, res) => {
  Todo.create({
    name: req.body.name,
    done: false,
    UserId: req.user.id
  })
    .then(todo => res.redirect('/'))
    .catch(error => res.status(422).json(error))
})

// 顯示todo detail
router.get('/:id', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) throw new Error("user not found")
      return Todo.findOne({
        where: {
          UserId: req.user.id,
          Id: req.params.id
        }
      })
    })
    .then(todo => res.render('detail', { todo }))
    .catch(error => res.status(422).json(error))
})

// 修改todo頁面
router.get('/:id/edit', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) throw new Error('user not found')
      return Todo.findOne({
        where: {
          UserId: req.user.id,
          Id: req.params.id
        }
      })
    })
    .then(todo => res.render('edit', { todo }))
})

// 修改todo
router.put('/:id', authenticated, (req, res) => {
  Todo.findOne({
    where: {
      Id: req.params.id,
      UserId: req.user.id
    }
  })
    .then(todo => {
      todo.name = req.body.name,
        todo.done = req.body.done === 'on'
      return todo.save()
    })
    .then(todo => res.redirect(`/todos/${req.params.id}`))
    .catch(error => res.status(422).json(error))
})

// 刪除todo
router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) throw new Error('user not found')
      return Todo.destroy({
        where: {
          Id: req.params.id,
          UserId: req.user.id
        }
      })
        .then(todo => res.redirect('/'))
        .catch(error => res.status(422).json(error))
    })
})

module.exports = router