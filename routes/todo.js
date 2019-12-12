const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Todo = db.Todo
const { authenticated } = require('../config/auth')

// 列出所有todo
router.get('/', authenticated, (req, res) => {
  res.send('列出所有todo')
})

// 新增todo頁面
router.get('/new', authenticated, (req, res) => {
  res.send('新增todo頁面')
})

// 新增todo
router.post('/', authenticated, (req, res) => {
  res.send('新增todo')
})

// 顯示todo detail
router.get('/:id', authenticated, (req, res) => {
  res.send('顯示todo detail')
})

// 修改todo頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改todo頁面')
})

// 修改todo
router.put('/:id', authenticated, (req, res) => {
  res.send('修改todo')
})

// 刪除todo
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('刪除todo')
})

module.exports = router