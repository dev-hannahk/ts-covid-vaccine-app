import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 510px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 430px;
  }

  div:first-child {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
