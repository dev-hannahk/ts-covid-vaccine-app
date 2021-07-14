import styled from 'styled-components';

interface ButtonStyled {
  selected?: boolean;
  custom?: boolean;
}

export const PeriodWrapper = styled.div``;

export const Button = styled.button<ButtonStyled>`
  width: ${(props) => (props.custom ? '72px' : '52px')};
  height: 36px;
  background: ${(props) =>
    props.selected ? props.theme.color.bgGreen : 'white'};
  margin-right: 8px;
  outline: none;
  border: 1px solid;
  border-color: ${(props) =>
    props.selected ? props.theme.color.green : props.theme.color.borderGrey};
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? props.theme.color.green : props.theme.color.grey};
  font-weight: 600;
  font-size: 12px;

  @media screen and (max-width: 420px) {
  }
`;
