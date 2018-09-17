const article = require('../models/article')

module.exports = {
  test: function(req, res, next){
    res.json({
      message: "test ahhh"
    })
  }
}
