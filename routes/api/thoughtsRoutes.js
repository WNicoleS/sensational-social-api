const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

router.route('/api/thoughts').get(getThoughts).post(createThoughts);

router.route('/api/thoughts/:thoughtsId').get(getSingleThoughts);

router.route('/api/thoughts/:thoughtsId').put(updateThoughts);

router.route('/api/thoughts/:thoughtsId').delete(deleteThoughts);

router.route('/api/thoughts/:thoughtsId/reactions').post(addReaction);

router.route('/api/thoughts/:thoughtsId/reactions').delete(removeReaction);

module.exports = router;
