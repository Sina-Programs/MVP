const Router = require('express').Router();
const controllers = require('../controllers/controllers.js');

Router.get('/data/:ticker', (req, res) => {
  controllers.getCompanyData(req.params.ticker, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

module.exports = Router;
