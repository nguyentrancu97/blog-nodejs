const path = require('path');

const express = require('express');

// HTTP logger
const morgan = require('morgan');

// plugin render template
const handlebars = require('express-handlebars');

// app express
const app = express();

const port = 3001;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', //config duoi file view
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app route
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
