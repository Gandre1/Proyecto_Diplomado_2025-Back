const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('../db/repositorios/userRepository');

class userService { 
  async register(username, password, role) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.create({ username, password: hashedPassword, role });
    return user;
  }

  async login(username, password) {
    const user = await UserRepository.findByUsername(username);
    if (!user) throw new Error('Usuario no encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Contraseña incorrecta');

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return { token, role: user.role };
  }
}

module.exports = new userService();
