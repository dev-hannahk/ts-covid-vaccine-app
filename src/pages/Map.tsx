import styled from 'styled-components';
import { theme } from '../styles/theme';

function Map() {
  return <MapPage theme={theme}>준비중...</MapPage>;
}

export default Map;

const MapPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  width: 520px;
  min-height: 880px;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  background-color: white;
`;
