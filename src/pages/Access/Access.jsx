
import { Link } from 'react-router-dom';
import './Access.css';

const perfis = [
  {
    id: 'aluno',
    titulo: 'Sou aluno',
    descricao:
      'Veja sua frequência, seu progresso e as vídeo aulas do professor.',
    botao: 'Entrar como aluno',
    rota: '/login/aluno',
  },
  {
    id: 'professor',
    titulo: 'Sou professor',
    descricao:
      'Cadastre alunos, registre frequência, progresso e publique vídeo aulas.',
    botao: 'Entrar como professor',
    rota: '/login/professor',
  },
];

export default function Access() {
  return (
    <main className="access-page">
      <div className="access-container">
        <div className="access-header">
          <p className="access-eyebrow">ÁREA RESTRITA</p>

          <h1>Aluno ou professor?</h1>

          <p className="access-description">
            Acesse sua área para ver frequência, progresso
            e vídeo aulas ou, se é o professor, para
            gerenciar a academia.
          </p>
        </div>

        <section className="access-grid" aria-label="Escolha seu perfil">
          {perfis.map((perfil) => (
            <article className="access-card" key={perfil.id}>
              <h2>{perfil.titulo}</h2>

              <p>{perfil.descricao}</p>

              <Link className="access-button" to={perfil.rota}>
                {perfil.botao}
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
