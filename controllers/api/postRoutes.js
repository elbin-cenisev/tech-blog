const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, Comment, User } = require('./../../models');

// For Insomnia testing: gets all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
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
        res.render('post', { post });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/comment', async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;