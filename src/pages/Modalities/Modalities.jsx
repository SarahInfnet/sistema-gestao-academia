
import './Modalities.css';

const modalidades = [
  {
    id: 1,
    codigo: 'R1',
    nome: 'Jiu-Jitsu',
    simbolo: 'jiujitsu',
    descricao:
      'Luta de solo, alavancas e finalizações. Turmas para iniciantes até competidores.',
  },
  {
    id: 2,
    codigo: 'R2',
    nome: 'Muay Thai',
    simbolo: 'muaythai',
    descricao:
      'A arte das oito armas — socos, cotoveladas, joelhadas e chutes, com foco em condicionamento.',
  },
  {
    id: 3,
    codigo: 'R3',
    nome: 'Judô',
    simbolo: 'judo',
    descricao:
      'Quedas, projeções e imobilizações. Base tradicional para disciplina e controle de corpo.',
  },
  {
    id: 4,
    codigo: 'R4',
    nome: 'Boxe',
    simbolo: 'boxe',
    descricao:
      'Fundamentos de striking, jogo de pernas e defesa, ótima porta de entrada para as lutas.',
  },
  {
    id: 5,
    codigo: 'R5',
    nome: 'MMA',
    simbolo: 'mma',
    descricao:
      'Integração de solo e em pé para quem já tem base em outra modalidade e quer evoluir.',
  },
];

function SimboloModalidade({ tipo }) {
  const simbolos = {
    jiujitsu: <path d="M5 16 L12 6 L19 16" />,
    muaythai: <path d="M5 7 L12 14 L19 7 M12 14 V19" />,
    judo: <path d="M5 17 Q12 3 19 17" />,
    boxe: <circle cx="12" cy="12" r="6" />,
    mma: <path d="M12 4 L20 12 L12 20 L4 12 Z" />,
  };

  return (
    <span className="modality-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {simbolos[tipo]}
      </svg>
    </span>
  );
}

export default function Modalities() {
  return (
    <main className="modalities-page">
      <div className="modalities-container">
        <div className="modalities-header">
          <p className="modalities-eyebrow">MODALIDADES</p>

          <h1>Card de treino da semana</h1>

          <p className="modalities-description">
            Cada modalidade tem turma própria, organizada por
            nível pelo professor.
          </p>
        </div>

        <section
          className="modalities-list"
          aria-label="Modalidades disponíveis"
        >
          {modalidades.map((modalidade) => (
            <article className="modality-item" key={modalidade.id}>
              <span className="modality-code">
                {modalidade.codigo}
              </span>

              <SimboloModalidade tipo={modalidade.simbolo} />

              <div className="modality-info">
                <h2>{modalidade.nome}</h2>
                <p>{modalidade.descricao}</p>
              </div>

              <span className="modality-status">
                TURMA ATIVA
              </span>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
