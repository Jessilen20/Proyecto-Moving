const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'secretito';

module.exports.createUser = async (req, res) => {
  try {
    const { name, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Contraseñas no coinciden' });
    }
    const user = new User({ name, lastName, email, password, confirmPassword });
    await user.save();
    res.status(201).json({ message: 'Usuario creado!' });

  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      res.json({ message: 'El usuario ya fue creado' }, 401)
    }
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: 'Error de autenticación 1' });
    }
    else {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const token = jwt.sign({
          password: user.password
        }, secretKey);

        res.cookie("usertoken", token, secretKey, {
          httpOnly: true
        })
        return res.status(200).json({ user: user, token: token });

      } else {
        return res.status(403).json({ message: 'Credenciales inválidas' });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: 'credenciales inválidas' });
  }
};






