
import Button from '../../components/Button/Button';
import './Home.css';

const indicadores = [
  { numero: '3', descricao: 'alunos ativos' },
  { numero: '5', descricao: 'modalidades' },
  { numero: '1', descricao: 'professor à frente' },
  { numero: '2', descricao: 'vídeo aulas publicadas' },
];

const diferenciais = [
  {
    numero: '01',
    titulo: 'Turmas por modalidade',
    descricao:
      'Jiu-Jitsu, Muay Thai, Judô, Boxe e MMA organizados por nível e horário.',
  },
  {
    numero: '02',
    titulo: 'Acompanhamento real',
    descricao:
      'Frequência e evolução técnica registradas aula a aula, sem planilha solta.',
  },
  {
    numero: '03',
    titulo: 'Treino fora do tatame',
    descricao:
      'Vídeo aulas do professor, disponíveis para revisão a qualquer hora.',
  },
];

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <div className="hero-container">
          <p className="hero-eyebrow">
            ACADEMIA DE LUTAS · desde o tatame até a vida
          </p>

          <h1 className="hero-title">
            DISCIPLINA
            <br />
            QUE SE
            <br />
            <span>CONQUISTA</span>
          </h1>

          <p className="hero-description">
            Jiu-Jitsu, Muay Thai, Judô e MMA em turmas
            organizadas por nível, com acompanhamento
            próximo do professor do primeiro treino à
            faixa preta.
          </p>

          <div className="hero-actions">
            <Button href="#faca-parte">Faça parte</Button>
            <Button href="#modalidades" variant="outline">
              Ver modalidades
            </Button>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Números da academia">
        {indicadores.map((indicador) => (
          <div className="stat-item" key={indicador.descricao}>
            <strong>{indicador.numero}</strong>
            <span>{indicador.descricao}</span>
          </div>
        ))}
      </section>

      <section className="benefits" id="sobre">
        <div className="benefits-container">
          <p className="section-eyebrow">POR QUE A SPLINTER</p>

          <h2>o cliente irá responder isso</h2>

          <p className="benefits-description">
            texto aleatorio que será personalizado depois juntamente com o cliente
          </p>

          <div className="benefits-grid">
            {diferenciais.map((item) => (
              <article className="benefit-card" key={item.numero}>
                <span className="benefit-number">
                  {item.numero}
                </span>

                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
