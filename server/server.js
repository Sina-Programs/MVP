const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/routes.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded());
app.use(morgan('dev'));

app.use('/data', routes);

const PORT = 80;
app.listen(PORT, () => console.log('Listening on port 80...'));
