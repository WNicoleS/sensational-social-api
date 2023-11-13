const { User, Thoughts } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThoughts(req, res) {
    try {
      const thoughts = await Thoughts.findOne({ _id: req.params.thoughtsId });

      if (!thoughts) {
        return res.status(404).json({ message: 'No thoughts found with that id' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThoughts(req, res) {
    try {
      const thoughts = await Thoughts.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thoughts._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'thought created, but no user with this ID' });
      }

      res.json({ message: 'thought created' });
    } catch (err) {
      console.error(err);
    }
  },

  async updateThoughts(req, res) {
    try {
        const thoughts = await Thoughts.findOneandUpdate(
            { _id: req.params.thoughtsId },
            { $set: { thoughts: req.body} },
            { runValidators: true, new: true });
         
         if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with that ID' });
          }
    
          res.json({ message: 'thoughts updated' });
        } catch (err) {
          res.status(500).json(err);
        }
  },

  async deleteThoughts(req, res) {
    try {
        const thoughts = await Thoughts.findOneandDelete({ _id: req.params.thoughtsId });
        
        if (!thoughts) {
           return res.status(404).json({ message: 'No thoughts with that ID' });
         }
   
         res.json({ message: 'thoughts deleted' });
       } catch (err) {
         res.status(500).json(err);
       }
  },

  async addReaction(req, res) {
    try {
        const thoughts = await Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtsId },
            { $addToSet: { reaction: req.body } },
            { runValidators: true, new: true }
        );

        if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with this id!' });
        }

        res.json({ message: 'reaction added' });
    }   catch (err) {
        res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
        const thoughts = await Thoughts.findOneandDelete(
            { _id: req.params.thoughtsId },
            { $pull: { reactionId: req.params.reactionId } },
            { runValidators: true, new: true }
        );

        if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with this id!' });
          }
    
          res.json({ message: 'thoughts removed' });
        } catch (err) {
          res.status(500).json(err);
        }
    },
};