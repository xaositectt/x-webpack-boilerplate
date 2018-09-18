const article = require('../models/article')

module.exports = {
  test: function(req, res, next){
    res.json({
      articles: [
        {
          name: 'Paige',
          points: 100
        },
        {
          name: 'Leila',
          points: 80
        }
      ]
    })
  }
}
