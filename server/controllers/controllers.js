const axios = require('axios');
const models = require('../models/models.js');
const api_key = require('../API_Key.js');

let controllers = {
  getCompanyData: (ticker, cb) => {
    let result = {};
    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${api_key}`
      )
      .then(({ data }) => {
        Object.assign(result, data);
      })
      .then(() => {
        axios
          .get(
            `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=${api_key}`
          )
          .then(({ data }) => {
            Object.assign(result, data);
          })
          .then(() => {
            axios
              .get(
                `https://finnhub.io/api/v1/stock/recommendation?symbol=${ticker}&token=${api_key}`
              )
              .then(({ data }) => {
                Object.assign(result, data);
              })
              .then(() => {
                axios
                  .get(
                    `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${api_key}`
                  )
                  .then(({ data }) => {
                    Object.assign(result, data);
                  })
                  .then(() => {
                    axios
                      .get(
                        `https://finnhub.io/api/v1/stock/price-target?symbol=${ticker}&token=${api_key}`
                      )
                      .then(({ data }) => {
                        Object.assign(result, data);
                        cb(null, result);
                      })
                      .catch((err) => {
                        console.log(err);
                        cb(err, null);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    cb(err, null);
                  });
              })
              .catch((err) => {
                console.log(err);
                cb(err, null);
              });
          })
          .catch((err) => {
            console.log(err);
            cb(err, null);
          });
      })
      .catch((err) => {
        console.log(err);
        cb(err, null);
      });
  },

  getNews: (cb) => {
    axios
      .get(`https://finnhub.io/api/v1/news?category=general&token=${api_key}`)
      .then(({ data }) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },

  getTicker: (string, cb) => {
    models.getTicker(string, (err, result) => {
      if (err) {
        console.log(err);
        controllers.getCompanyData(string, (err2, result) => {
          if (err2) {
            console.log(err2);
            cb(err2, null);
          } else {
            cb(null, result);
          }
        });
      } else {
        cb(null, result);
      }
    });
  },
};

module.exports = controllers;
