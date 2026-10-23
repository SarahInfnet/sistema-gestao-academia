
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const modalidades = [
  'Jiu-Jitsu',
  'Muay Thai',
  'Judô',
  'Boxe',
  'MMA',
];

const dadosIniciais = {
  nome: '',
  contato: '',
  modalidade: 'Jiu-Jitsu',
  mensagem: '',
};

export default function Join() {
  const [formulario, setFormulario] = useState(dadosIniciais);
  const [aviso, setAviso] = useState('');

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setAviso('');
  }

  function enviarFormulario(event) {
    event.preventDefault();

    if (!formulario.nome.trim() || !formulario.contato.trim()) {
      setAviso('Preencha seu nome e uma forma de contato.');
      return;
    }

    // Somente demonstração de front-end.
    // Ainda não há envio para servidor.
    setAviso(
      'Formulário preenchido! O envio à academia será habilitado futuramente.'
    );
  }

  return (
    <main className="join-page">
      <div className="join-container">
        <div className="join-header">
          <p className="join-eyebrow">FAÇA PARTE</p>

          <h1>Dê o primeiro passo no tatame</h1>

          <p>
            Preencha seus dados e o professor entra em contato
            para agendar sua aula experimental.
          </p>
        </div>

        <div className="join-grid">
          <form className="join-form" onSubmit={enviarFormulario}>
            <div className="join-field">
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                autoComplete="name"
                value={formulario.nome}
                onChange={atualizarCampo}
                required
              />
            </div>

            <div className="join-field">
              <label htmlFor="contato">WhatsApp ou e-mail</label>
              <input
                id="contato"
                name="contato"
                type="text"
                placeholder="(21) 90000-0000"
                value={formulario.contato}
                onChange={atualizarCampo}
                required
              />
            </div>

            <div className="join-field">
              <label htmlFor="modalidade">
                Modalidade de interesse
              </label>

              <select
                id="modalidade"
                name="modalidade"
                value={formulario.modalidade}
                onChange={atualizarCampo}
                required
              >
                {modalidades.map((modalidade) => (
                  <option key={modalidade} value={modalidade}>
                    {modalidade}
                  </option>
                ))}
              </select>
            </div>

            <div className="join-field">
              <label htmlFor="mensagem">
                Mensagem (opcional)
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                placeholder="Idade, experiência prévia, disponibilidade de horário..."
                value={formulario.mensagem}
                onChange={atualizarCampo}
              />
            </div>

            <button className="join-submit" type="submit">
              Enviar interesse
            </button>

            {aviso && (
              <p className="join-feedback" role="status">
                {aviso}
              </p>
            )}
          </form>

          <aside className="join-contact">
            <h2>Fale direto com a academia</h2>

            <dl className="join-contact-list">
              <div>
                <dt>Endereço</dt>
                <dd>Rua da academia, 120 — bairro </dd>
              </div>

              <div>
                <dt>WhatsApp</dt>
                <dd>(21) 90000-0000</dd>
              </div>

              <div>
                <dt>E-mail</dt>
                <dd>contato@splinter.com.br</dd>
              </div>

              <div>
                <dt>Horários</dt>
                <dd>Seg a sex, 07h–21h</dd>
              </div>
            </dl>

            <div className="join-access">
              <p>
                Já é aluno cadastrado? Acesse sua área em{' '}
                <Link to="/acesso">Aluno / Professor</Link>.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
