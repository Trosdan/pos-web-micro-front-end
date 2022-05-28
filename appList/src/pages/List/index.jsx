import React, { useCallback, useEffect, useState } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { api } from '../../services/api';

import { Table } from './styles';

export default function List({ navigate }) {
  const [clients, setClients] = useState([]);

  const loadClients = useCallback(async () => {
    const { data } = await api.get('/clientes');

    setClients(data);
  }, []);

  const handleViewClient = useCallback((id) => {
    navigate(`/view/${id}`);
  }, []);

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Peso</th>
          <th>Altura</th>
          <th>Sexo</th>
          <th>IMC</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.nome}</td>
            <td>{client.peso}</td>
            <td>{client.altura}</td>
            <td>{client.sexo}</td>
            <td>{client.imc.toFixed(2)}</td>
            <td>
              <MdRemoveRedEye
                className="button-view-client"
                onClick={() => handleViewClient(client.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
