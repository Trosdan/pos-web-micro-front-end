import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;

  border-start-start-radius: 8px;
  border-start-end-radius: 8px;

  padding: 12px 8px 16px 8px;

  * {
    color: black;
  }

  form {
    display: flex;
    flex: 1;

    flex-direction: column;

    label {
      margin-top: 4px;
    }

    input {
      padding: 4px 8px;
      border: 1px solid #d6d6d6;
      border-radius: 8px;
    }

    select {
      padding: 4px 8px;
      border: 1px solid #d6d6d6;
      border-radius: 8px;
    }

    button {
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 8px;
      align-self: flex-end;

      height: 30px;
      width: 80px;

      margin-top: 8px;

      color: rgba(0, 0, 0, 0.87);

      font-weight: bold;
      background: #ffec20;
      transition: background 0.2s;
      transition: border-width 0.2s;

      &:hover {
        background: #ffff61;
        border: 1px solid #c8ba00;
        transition: background 0.2s;
        transition: border-width 0.2s;
        cursor: pointer;
      }
    }
  }
`;
