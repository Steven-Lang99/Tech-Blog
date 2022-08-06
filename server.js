const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // get the engine function from hbs package
const PORT = process.env.PORT || 3333; // set up port
require('dotenv').config(); // attach .env process to obj

const app = express(); // new express app

const { view_routes } = require('./controllers'); // require path to view routes

// load view_routes on root route
app.use('/', view_routes)

app.use(express.static(path.join(__dirname, '/public'))); // allows frontend files to be shared with browser/client
// set up the hbs engine stuff
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// accept form and json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// set up server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

