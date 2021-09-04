const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;
