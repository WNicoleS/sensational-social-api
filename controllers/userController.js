const User = require('../models/user');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json({ message: 'user created' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneandUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
         
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
    
      res.json({ message: 'user updated' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneandDelete(
        { _id: req.params.userId },
        { $pull: { user: req.params.userId } },
        { runValidators: true, new: true }
      )
            
      if (!user) {
       return res.status(404).json({ message: 'No user with that ID' });
      }
       
      res.json({ message: 'user deleted' });
    } catch (err) {
     res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
  
      res.json({ message: 'friend added' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndDelete(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendsId } },
        { runValidators: true, new: true }
      )
  
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
  
      res.json({ message: 'friend removed' });
    } catch (err) {
      res.status(500).json(err);
    }

  },
};
