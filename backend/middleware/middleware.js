const printer = function(options) {
  return function(req, res, next){
    console.log(options);
    next();
  }
}

module.exports = printer;
