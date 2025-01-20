const User = require('../../models/user');

class userRepository {
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async findById(userId) {
    return await User.findById(userId);
  }
}

module.exports = new userRepository();
