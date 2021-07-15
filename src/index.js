const path = require('path')


const express = require('express')

// HTTP logger
const morgan = require('morgan')

// plugin render template
const handlebars  = require('express-handlebars');

// app express
const app = express()


const port = 3001

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs' //config duoi file view 
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})