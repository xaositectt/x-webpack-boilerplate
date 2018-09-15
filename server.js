const express = require('express');
const port = process.env.PORT || '3000';
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

//require routes
const firstRouter = require('./routes/first');
const secondRouter = require('./routes/second');

const app = express();

//custom middleware
const middleware = require('./middleware/middleware');

app.use(middleware('middleware'));

//json-parser
app.use(express.json());

//log request data
app.use(logger('dev'));

// enable cross-origin resource sharing
// options: only from the specified origin, methods and headers!
app.use(cors({  
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//log time
const requestTime = function (req, res, next) {
  let date = new Date();  
  req.requestTime = date;
  let options = {  
      weekday: "long",
      year: "numeric",
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"  
  };  

  console.log(date.toLocaleTimeString("en-us", options)); 
  next()
}

app.use(requestTime)

//homepage
app.get('/', (req, res) => {
  res.status(200).json({msg: 'hello there'});
})

// use routes
app.use('/first', firstRouter);
app.use('/second', secondRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

//error handling
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  console.log(err);
  
  res.json({
    status: `error ${err.status}`,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
