
import './About.css';

const valores = [
  {
    titulo: 'Disciplina antes da técnica',
    descricao:
      'Toda modalidade começa pelo respeito ao tatame, ao colega e ao horário.',
  },
  {
    titulo: 'Evolução acompanhada',
    descricao:
      'Frequência e progresso técnico registrados, o aluno vê a própria evolução.',
  },
  {
    titulo: 'Ensino também fora da aula',
    descricao:
      'Vídeo aulas do professor para revisar movimentos entre um treino e outro.',
  },
  {
    titulo: 'Turmas por nível real',
    descricao:
      'Iniciante, intermediário e avançado não treinam do mesmo jeito, nem deveriam.',
  },
];

export default function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-text">
            <p className="about-eyebrow">SOBRE NÓS</p>

            <h1 id="about-title">
              Uma academia, um
              <br />
              professor, um
              <br />
              compromisso
            </h1>

            <p>
              A Splinter nasceu para ser um espaço simples:
              um lugar onde a disciplina das artes marciais
              é ensinada com atenção individual, sem a
              burocracia de uma rede grande. Aqui, quem
              administra as turmas é o mesmo professor que
              está no tatame e isso muda a forma como
              cada aluno é acompanhado.
            </p>

            <p>
              Trabalhamos com turmas por modalidade e por
              nível, do iniciante que pisa pela primeira
              vez no tatame até quem já compete. O objetivo
              é sempre o mesmo: evolução técnica de verdade,
              registrada e visível para o aluno.
            </p>
          </div>

          <div className="about-values">
            {valores.map((valor) => (
              <article className="about-value" key={valor.titulo}>
                <h2>{valor.titulo}</h2>
                <p>{valor.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-professor">
          <p className="about-eyebrow">O PROFESSOR</p>

          <h2>À frente da Splinter e da gestão</h2>

          <p>
            Responsável por todas as modalidades, turmas
            e pelo acompanhamento de cada aluno do
            cadastro à graduação. É também quem alimenta
            o portal com frequência, progresso e vídeo aulas.
          </p>
        </section>
      </div>
    </main>
  );
}
