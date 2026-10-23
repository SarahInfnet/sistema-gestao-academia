
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Modalidades', to: '/modalidades' },
  { label: 'Faça parte', to: '/faca-parte', destaque: true },
  { label: 'Aluno / Professor', to: '/acesso' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <NavLink className="header-logo" to="/">
        Splinter<span>.</span>
      </NavLink>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>

      <nav
        id="menu-principal"
        className={`header-nav ${menuAberto ? 'aberto' : ''}`}
        aria-label="Navegação principal"
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              [
                'nav-link',
                isActive ? 'ativo' : '',
                item.destaque ? 'nav-destaque' : '',
              ].join(' ')
            }
            onClick={() => setMenuAberto(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
