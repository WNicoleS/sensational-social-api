const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtsRoutes = require('./api/thoughtsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;