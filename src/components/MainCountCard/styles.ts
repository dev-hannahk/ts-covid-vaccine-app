import styled from 'styled-components';

interface CountBoxStyled {
  first?: boolean;
}

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 125px;
  border: 1px solid ${(props) => props.theme.color.borderGrey};
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
`;

export const Count = styled.div`
  display: flex;
  width: inherit;
  height: 100px;
`;

export const CountBox = styled.div<CountBoxStyled>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: inherit;

  span:first-child {
    font-size: 12px;
    margin: 6px 0;
  }

  span:nth-child(2) {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) =>
      props.first ? props.theme.color.green : props.theme.color.blue};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 20px;
    background-color: ${(props) =>
      props.first ? props.theme.color.bgGreen : props.theme.color.bgBlue};
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) =>
      props.first ? props.theme.color.green : props.theme.color.blue};
  }
`;

export const BasicDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: inherit;
  height: 25px;
  padding: 0 10px 8px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.color.grey};
`;
