const router = require('express').Router();
const User = require('./user');
const Thoughts = require('./thoughts');

//router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = { User, Thoughts };