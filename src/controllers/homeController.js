import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mateus',
      sobreNome: 'Pierre',
      email: 'mateus@gmail.com',
      idade: 23,
      peso: 78.5,
      altura: 1.81,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
