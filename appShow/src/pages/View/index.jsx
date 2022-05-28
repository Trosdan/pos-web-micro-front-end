import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export default function View({ location }) {
  const [client, setClient] = useState();
  const [error, setError] = useState(false);

  const getClient = useCallback(async () => {
    if (!location) return;
    try {
      const { data } = await api.get(
        `/clientes/${location.pathname.split('/')[2]}`
      );

      if (!data) throw new Error('Cliente não encontrado');

      setClient(data);
    } catch (err) {
      setError(true);
      alert('Não foi possível carregar o cliente');
    }
  }, []);

  useEffect(() => {
    getClient();
  }, []);

  return (
    <Container>
      {error ? (
        <h1>Erro ao carregar o cliente</h1>
      ) : (
        <>
          <h3>Nome: {client?.nome}</h3>
          <div>
            <p>
              <span>Altura:</span> {client?.altura}
            </p>
            <p>
              <span>Peso:</span> {client?.peso}
            </p>
            <p>
              <span>IMC:</span> {client?.imc}
            </p>
          </div>
        </>
      )}
    </Container>
  );
}
