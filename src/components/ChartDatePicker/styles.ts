import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px 5px 0;
`;

export const SearchButton = styled.button`
  width: 45px;
  height: 36px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.bgButton};
  color: ${({ theme }) => theme.color.grey};
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
`;
