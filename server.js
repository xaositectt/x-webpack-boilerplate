const express = require('express')
const port = process.env.PORT || '3000'
const logger = require('morgan')
const createError = require('http-errors')
const cors = require('cors')

const articleRoute = require('./backend/routes/article')

const app = express()

const timeLog = require('./backend/middleware/time_log')
app.use(timeLog)

app.use(express.json())

app.use(logger('dev'))

// only from the specified origin
app.use(cors({
  origin: ["http://localhost:3001"]
}))

app.get('/', (req, res) => {
  res.status(200).json({msg: 'hello Paige'});
})

app.use('/api', [articleRoute])

app.use(function(req, res, next) {
  next(createError(404));
});

//error handling
// set locals, only providing error in development
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  console.log(err);

  res.json({
    status: `error ${err.status}`,
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
