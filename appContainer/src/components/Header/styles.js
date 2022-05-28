import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin: 0 8px;

  p {
    font-size: 0.8rem;

    span {
      color: #ffec20;
      font-size: 1rem;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex: 1;

  align-items: center;

  p {
    display: flex;
    flex: 1;
    font-size: 1.2rem;

    margin-left: 8px;
  }

  button {
    border: none;
    border-radius: 8px;

    height: 40px;
    width: 120px;

    margin: 0 8px;

    color: rgba(0, 0, 0, 0.87);

    font-weight: bold;
    background: #ffec20;
    transition: background 0.2s;

    &:hover {
      background: #ffff61;
      transition: background 0.2s;
      cursor: pointer;
    }
  }
`;
