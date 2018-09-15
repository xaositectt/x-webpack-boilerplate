const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({message: 'this is the second page'});
});

module.exports = router;
