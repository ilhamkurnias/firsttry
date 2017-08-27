const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencode({extended:false}))
app.use(bodyParser.json())

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'ilham',
  password : '',
  database : 'cmart'
})
