const Router = require('express').Router();
const controllers = require('../controllers/controllers.js');

Router.get('/profile/:ticker', (req, res) => {
  controllers.getCompanyProfile(req.params.ticker, (err, data) => {
    if (err) {
      console.log('ROUTES', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

Router.get('/financials/:ticker', (req, res) => {
  controllers.getCompanyFinancials(req.params.ticker, (err, data) => {
    if (err) {
      console.log('ROUTES', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

Router.get('/price_target/:ticker', (req, res) => {
  controllers.getPriceTargets(req.params.ticker, (err, data) => {
    if (err) {
      console.log('ROUTES', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

module.exports = Router;
