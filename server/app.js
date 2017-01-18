'use strict'
const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()

app.use( function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/cell1', (req, res) => {
  res.send(JSON.stringify(getData()));
})
app.get('/cell2', (req, res) => {
  res.send(JSON.stringify(getData()));
})
app.get('/cell3', (req, res) => {
  res.send(JSON.stringify(getData()));
})
app.get('/cell4', (req, res) => {
  res.send(JSON.stringify(getData()));
})
let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Application worker ${process.pid} started at ${port}...`))

let getData = () => [
  Math.floor((Math.random() * 200) + 1), 
  Math.floor((Math.random() * 200) + 1), 
  Math.floor((Math.random() * 200) + 1),
  Math.floor((Math.random() * 200) + 1)
]
