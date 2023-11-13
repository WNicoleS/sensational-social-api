const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFreind,
} = require('../../controllers/userController');

router.route('/api/users').get(getUsers).post(createUser);

router.route('/api/users/:userId').get(getSingleUser);

router.route('/api/users/:userId').put(updateUser);

router.route('/api/users/:userId').delete(deleteUser);

router.route('/api/users:userId/friends/:friendsId').post(addFriend);

//router.route('/api/users/:userId/friends/:friendsId').delete(removeFreind);

module.exports = router;
