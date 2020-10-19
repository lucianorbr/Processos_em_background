import passwordGenerator from "password-generator";
import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name , email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false)
    };

    await Mail.sendMail({
      from: 'DIO <contato@dio.com.br>',
      to: `${name} <${email}>`,
      subjet: 'Cadastro de usuário',
      html: `Olá, ${name}, Bem-vindo a DIO.`
    })

    return res.json(user);
  }
}