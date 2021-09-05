const router = require('express').Router();
const { Post, User, Comment } = require('./../models');

// Homepage: Displays all posts, and also shows the name of the user that wrote each of them
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
  } catch (err) {
      res.status(500).json(err);
  }
});

// Dashboard: Only show the dashboard to logged in users, otherwise redirect to the login/registration page
router.get('/dashboard', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render('dashboard', { logged_in: req.session.logged_in });
    }
    else {
      res.render('login');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// This route only redirects to the login (for when users click login button). 
// Actual login is handled in api/users/login
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
