import React, { useCallback, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export default function Register({ navigate }) {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [sexo, setSexo] = useState('masculino');

  const submit = useCallback(
    async (e) => {
      e.preventDefault();

      const client = {
        nome,
        peso,
        altura,
        sexo,
        imc: peso / Math.pow(altura, 2),
      };

      await registerClient(client);

      navigate('/');
    },
    [nome, peso, altura, sexo]
  );

  const registerClient = useCallback(async (client) => {
    await api.post('/clientes', client);
  }, []);

  return (
    <Container>
      <form onSubmit={submit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="peso">Peso</label>
        <input
          id="peso"
          type="number"
          step={0.1}
          placeholder="Peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <label htmlFor="altura">Altura</label>
        <input
          id="altura"
          type="number"
          step={0.1}
          placeholder="Altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor="sexo">Sexo</label>
        <select
          id="sexo"
          placeholder="Selecione"
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
}
