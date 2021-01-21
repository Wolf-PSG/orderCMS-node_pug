const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');
const viewRouter = require('./routes/views.routes');
const orderRouter = require('./routes/order.route');

const app = express();
app.use(cors()); //enables cross origin requests - for potential hosting
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(methodOverride('_method'));

app.set('view engine', 'pug');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use('/', viewRouter);
app.use('/api/v1/order', orderRouter);

module.exports = app;
