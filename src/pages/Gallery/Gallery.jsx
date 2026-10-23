
import './Gallery.css';

const fotos = [
  {
    id: 1,
    titulo: 'Treino livre de Jiu-Jitsu',
    estilo: 'vermelho',
  },
  {
    id: 2,
    titulo: 'Cerimônia de graduação',
    estilo: 'dourado',
  },
  {
    id: 3,
    titulo: 'Sparring de Muay Thai',
    estilo: 'preto',
  },
  {
    id: 4,
    titulo: 'Aula infantil de Judô',
    estilo: 'vermelho',
  },
  {
    id: 5,
    titulo: 'Preparação para competição',
    estilo: 'dourado',
  },
  {
    id: 6,
    titulo: 'Treino em grupo de MMA',
    estilo: 'preto',
  },
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-eyebrow">GALERIA</p>

          <h1>Momentos da equipe Splinter</h1>

          <p className="gallery-description">
            Um retrato do dia a dia da academia, treinos,
            graduações e competições.
          </p>
        </div>

        <div className="gallery-grid">
          {fotos.map((foto) => (
            <article
              key={foto.id}
              className={`gallery-card gallery-${foto.estilo}`}
            >
              <div className="gallery-card-content">
                <h2>{foto.titulo}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
