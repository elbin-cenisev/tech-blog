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

router.post('/comment', async (req, res) => {
    try {
        console.log(req.session.user_id);
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
})


module.exports = router;