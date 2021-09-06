const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, Comment, User } = require('./../../models');

// For Insomnia testing: gets all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { model: User, attributes: ['name'] },
                { model: Comment, include: [{ model: User }], },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// For Insomnia test: Get all Comments
router.get('/comment', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Finds specific post by id. Used when you click on a post on the homepage
router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render('post', { post, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create a new post. Used on the Dashboard screen.
router.post('/', async (req, res) => {
    // Some kind of bug didn't allow me to directly reference req.session.user_id in the Post.Create()
    let userID = req.session.user_id; 
    try {
        const postData = await Post.create({
            title: req.body.title,
            text: req.body.text,
            created_date: req.body.created_date,
            user_id: userID
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Creates a comment to a post.
router.post('/comment', async (req, res) => {
    try {
        const commentData = await Comment.create({
            text: req.body.text,
            created_date: req.body.created_date,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;