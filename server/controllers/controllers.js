const axios = require('axios');
const api_key = require('../API_Key.js');

let controllers = {
  getCompanyProfile: (Ticker, cb) => {
    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${Ticker}&token=${api_key}`
      )
      .then(({ data }) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },

  getCompanyFinancials: (Ticker, cb) => {
    axios
      .get(
        `https://finnhub.io/api/v1/stock/metric?symbol=${Ticker}&metric=all&token=${api_key}`
      )
      .then(({ data }) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },

  getPriceTargets: (Ticker, cb) => {
    axios
      .get(
        `https://finnhub.io/api/v1/stock/recommendation?symbol=${Ticker}&token=${api_key}`
      )
      .then(({ data }) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },
};

module.exports = controllers;
