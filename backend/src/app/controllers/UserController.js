const Yup = require('yup');
const User = require('./../models/User');

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

class UserController {
  async store(req, res) {
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro na validação do conteúdo do body' });
    }

    // if(await User.findOne({ email: req.body.email })){
    //   return res
    //   .status(400)
    //   .json({ error: 'Email já existente' });
    // }

    const user = await User.create(req.body);
    const { _id } = user;
    return res.json({ _id });
  }
}

module.exports = new UserController();
