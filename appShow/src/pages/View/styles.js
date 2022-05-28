import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;

  border-start-start-radius: 8px;
  border-start-end-radius: 8px;

  padding: 12px 8px 16px 8px;

  * {
    color: black;
  }

  div {
    display: flex;
    flex-direction: row;

    p {
      border: 1px solid black;
      display: flex;
      flex: 1;
      align-items: center;

      span {
        display: flex;
        padding: 4px 8px;
        background-color: #d2d2d2;
      }
    }
  }
`;
