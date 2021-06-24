import styled from 'styled-components';
import { theme } from '../styles/theme';
import { NavLink } from 'react-router-dom';

interface navListType {
  id: number;
  title: string;
  link: string;
}

const navList: navListType[] = [
  { id: 1, title: '접종 통계', link: '/' },
  { id: 2, title: '접종 기관', link: '/map' },
];

function Navigation() {
  return (
    <NavWrapper>
      <TitleBox theme={theme}>
        <span>Covid-19</span>
        <span>Vaccinations</span>
      </TitleBox>
      <NavUl theme={theme}>
        {navList.map((list) => (
          <NavLi
            theme={theme}
            key={list.id}
            to={list.link}
            activeClassName='active'
            exact
          >
            {list.title}
          </NavLi>
        ))}
      </NavUl>
    </NavWrapper>
  );
}

export default Navigation;

const NavWrapper = styled.div`
  margin-right: 60px;
`;

const TitleBox = styled.div`
  width: 240px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  margin-bottom: 20px;
  background-color: white;
  font-weight: 600;
  text-transform: uppercase;

  span:first-child {
    margin-right: 8px;
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.color.titlePink};
  }
`;

const NavUl = styled.div`
  width: 240px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
`;

const NavLi = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 50px;
  padding-left: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.grey};
  font-size: 14px;

  &.active {
    width: 238px;
    background-color: ${({ theme }) => theme.color.activeBg};
    border-left: 3px solid ${({ theme }) => theme.color.activeBorder};
    font-weight: 600;
  }

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
  }
`;
