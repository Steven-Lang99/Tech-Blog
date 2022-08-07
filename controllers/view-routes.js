const router = require('express').Router();
const sequelize = require('../config/connection');
// const User = require('../models/User');
const { isLoggedIn } = require('./helper');

router.get('/', (request, response) => {
    // const users_id = request.session.users_id;

    // if (users_id) {
    //     return User.finOne({
    //         where: {
    //             id: users_id
    //         },

    //         attributes: ['id', 'users_name']
    //     }).then(user => {
    //         user = {
    //             users_name: user.users_name,
    //         };
    //     })
    // }
    response.render('index');
});

router.get('/register', (request, response) => {
    response.render('register');
});

router.get('/login', (request, response) => {
    response.render('login');
});





module.exports = router;