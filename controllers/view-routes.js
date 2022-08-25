const router = require('express').Router();
const sequelize = require('../config/connection');
const User = require('../models/User');
const Post = require('../models/Post')


//routes for home page and logging in and registering
router.get('/', (req, res) => {
    if (req.session.user_id) {

        return User.findByPk(req.session.user_id).then(user => {
            user = {
                id: user.id,
                users_name: user.users_name,
                email: user.email,
                createdAt: user.createdAt
            }
            res.render('index', { user })
        });
    }
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', async (req, res) => {

    console.log(req.session);
    let user = await User.findByPk(req.session.user_id, { include: Post });
    let posts = await Post.findAll();
    // user = {
    //     username: user.users_name,
    //     posts: user.posts.map(post => {
    //         return {
    //             id: post.id,
    //             title: post.title,
    //             message: post.message,
    //         }
    //     })
    // }
    posts = posts.map(post => {
        return {
            id: post.id,
            title: post.title,
            message: post.message,
        }
    })
    res.render('dashboard', { posts, title: 'dashboard', });



});



module.exports = router;