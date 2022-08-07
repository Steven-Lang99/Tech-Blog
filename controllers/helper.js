// exports.isLoggedIn = function (req, res, next) {
//     const users_id = req.session.users_id;
//     const is_auth_route = req.path.match(/register|login/gi);

//     if (is_auth_route && users_id) {
//         return res.redirect('/');
//     }

//     next();
// }