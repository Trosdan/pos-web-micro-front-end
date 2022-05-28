import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  text-align: center;

  border-spacing: 0;
  overflow: hidden;

  background-color: #f6f6f6;

  * {
    color: rgba(0, 0, 0, 0.87);
  }

  border-start-start-radius: 8px;
  border-start-end-radius: 8px;

  thead {
    background-color: #d6d6d6;
    tr {
      th {
        padding: 8px 0;
      }
    }
  }

  tbody {
    tr {
      transition: background 0.2s;

      &:hover {
        background-color: #c2c2c2;
        transition: background 0.2s;
      }
      td {
        padding: 8px 0;

        .button-view-client {
          display: flex;
          flex: 1;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
