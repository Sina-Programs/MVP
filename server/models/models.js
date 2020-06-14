const companies = require('../../Database/db.js');

const getTicker = (string, cb) => {
  companies
    .find({ $text: { $search: string } })
    .then((res) => {
      if (res.length < 1) {
        cb(new Error(), null);
      } else {
        cb(null, res[0].symbol);
      }
    })
    .catch((err) => {
      cb(err, null);
    });
};

module.exports.getTicker = getTicker;
