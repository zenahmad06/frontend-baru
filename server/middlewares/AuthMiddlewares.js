const jwt = require('jsonwebtoken');
const User = require('../models/User'); // sesuaikan path jika beda

const protect = async (req, res, next) => {
  let token;
  // Cek apakah ada Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Ambil token dari header
      token = req.headers.authorization.split(' ')[1];

      // Verifikasi token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'SECRET');

      // Ambil user dari database tanpa password
      req.user = await User.findById(decoded.id).select('-password');
      //alert not found
      if (!user) {
        return res.status(403).json({ message: 'User not registered or removed' });
      }

      // Lanjut ke controller berikutnya
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'No token, not authorized' });
  }
};

module.exports = protect;
