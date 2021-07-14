import { theme } from '../../styles/theme';
import { NavWrapper, TitleBox, Nav, NavLi } from './styles';
import { navList } from './types';

function Navigation() {
  return (
    <NavWrapper>
      <TitleBox theme={theme}>
        <span>Covid-19</span>
        <span>Vaccinations</span>
      </TitleBox>
      <Nav theme={theme}>
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
      </Nav>
    </NavWrapper>
  );
}

export default Navigation;
