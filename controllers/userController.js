const UserService = require('../services/userService');

class userController {
  async register(req, res) {
    try {
      const { username, password, role } = req.body;
      const result = await UserService.register(username, password, role);
      
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await UserService.login(username, password);
      
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = new userController();
