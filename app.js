const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')

const { dbconnect } = require('./helpers/database')

const indexRouter = require('./routes/index')
const postRouter = require('./modules/post/PostRouter')
const authRouter = require('./modules/auth/AuthRouter')

dbconnect()

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/', authRouter)
app.use('/posts', postRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500).send(err)
})

module.exports = app
