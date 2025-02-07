const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_clave_secreta');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
}

module.exports = { authenticate };
