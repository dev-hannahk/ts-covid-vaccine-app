import styled from 'styled-components';

export const SelectCityWrapper = styled.div``;

export const SelectBox = styled.select`
  width: 60px;
  height: 36px;
  outline: none;
  border-color: ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.grey};
  margin: 0 8px 20px 0;
  padding-left: 8px;
`;
