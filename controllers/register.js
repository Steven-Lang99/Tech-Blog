//Worked on getting my register page working but could not.

// const register = require('express').Router();
// const User = require('../models/User');
// const { isLoggedIn } = require('./helpers');

// register.get('/register', isLoggedIn, (request, response) => {
//     const { user_name, password } = request.body;


//     if (!user_name || !password) {

//         response.redirect('/register');
//     }

//     User.findOne({
//         where: {
//             email
//         }
//     }).then(user => {
//         if (user) {
//             return response.redirect('/register')
//         }

//         User.create(request.body)
//             .then(new_user => {
//                 request.seesion.save(() => {
//                     request.session.user_id - new_user.id;
//                     response.redirect('/')
//                 })
//             }).catch(err => {
//                 response.redirect('/register')
//             })
//     })
// });

// register.post('/login', isLoggedIn, (request, response) => {
//     const { user_name, password } = request.body;

//     if (!user_name || !password) {

//         request.session.errors = ['Error']

//         return response.redirect('/login')
//     }

//     User.findOne({
//         where: {
//             user_name
//         }
//     }).then(async user => {
//         if (!user) {
//             request.session.errors = ['errors']
//             return response.redirect('/login')
//         }

//         const check_pass = await user.validatePassword(password, user.password);

//         if (!check_pass) {
//             request.session.errors = ['error']
//             response.redirect('/login')
//         }
//         request.session.save(() => {
//             request.session.user_id = user.id;

//             response.redirect('/')
//         })
//     })
// });

// register.get('/logout', (request, response) => {
//     if (!request.session.user_id) return response.redirect('/');

//     request.destroy(() => {

//         response.redirect('/');
//     })
// })

// module.exports = register;