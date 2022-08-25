const express = require('express');
const connection = require('./config/connection')
const path = require('path');
const { engine } = require('express-handlebars'); // get the engine function from hbs package
const PORT = process.env.PORT || 3333; // set up port
require('dotenv').config(); // attach .env process to obj

const app = express(); // new express app
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { view_routes, post_routes, auth_routes } = require('./controllers'); // require path to view routes
const sequelize = require('sequelize');

// load view_routes on root route

// app.use('/reg', register)

// set up the hbs engine stuff
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public'))); // allows frontend files to be shared with browser/client
// accept form and json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({ db: connection }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        // httpOnly: true
    }
}));


app.use('/', view_routes)
app.use('/auth', auth_routes)
app.use('/post', post_routes)

// set up server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    connection.sync({ force: true })
})

