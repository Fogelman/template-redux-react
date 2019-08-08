const User = require('../models/User');
const Yup = require('yup');

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

class SessionController {
  async store(req, res) {
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro na validação do conteúdo do body' });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: 'Usuário/Senha incorretos'
      });
    }

    if (!(await user.compareHash(password))) {
      return res.status(401).json({
        error: 'Usuário/Senha incorretos'
      });
    }

    const { _id } = user;
    return res.json({
      token: User.generateToken(user),
      user: { _id }
    });
  }
}

module.exports = new SessionController();
