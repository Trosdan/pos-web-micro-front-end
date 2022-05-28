import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Header as HeaderContainer, NavBar } from './styles';

const routesName = {
  '/': 'Listagem',
  '/register': 'Cadastro',
  '/view': 'Cliente #',
};

export function Header() {
  const { pathname } = useLocation();

  const pageName = useMemo(() => {
    return routesName[pathname] || `Cliente #${pathname.split('/')[2]}`;
  }, [pathname]);

  return (
    <>
      <HeaderContainer>
        <h1>Calculo de IMC</h1>
        <p>
          Realize cadastro de <br />
          usuários e identifique o <span>IMC</span>
        </p>
      </HeaderContainer>
      <NavBar>
        <p>{pageName}</p>
        <Link to="/">
          <button>LISTAR</button>
        </Link>
        <Link to="/register">
          <button>CADASTRAR</button>
        </Link>
      </NavBar>
    </>
  );
}
