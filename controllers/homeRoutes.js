const router = require('express').Router();
const { Post, User } = require('./../models');

// Homepage: Displays all posts, and also shows the name of the user that wrote each of them
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
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
      res.render('dashboard');
    }
    else {
      res.render('login');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("You have been logged out")
    });
  } else {
    console.log("Nobody's logged in")
    res.status(404).end();
  }
});



module.exports = router;
