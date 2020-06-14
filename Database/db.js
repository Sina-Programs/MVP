// require mongoose
const mongoose = require('mongoose');

// connect mongoose to a mongodb database on localhost -> database = 'Companies'
// change localhost to 'mongo' when using docker image
mongoose
  .connect('mongodb://localhost/Companies', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to Database...'))
  .catch((err) => console.log('Error: ', err));

const db = mongoose.connection;

// create collection / schema
let companySchema = mongoose.Schema({
  description: String,
  displaySymbol: String,
  symbol: String,
});

// create model for documents
let Company = mongoose.model('Company', companySchema);

module.exports = Company;
