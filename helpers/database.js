const mongoose = require('mongoose')
const database = require('../config/database')

exports.dbconnect = () => {
  console.log(database.connectionUrl)
  mongoose.connect(
    database.connectionUrl, 
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => console.log(!err ? 'DB Connected' : err)
  )
}
