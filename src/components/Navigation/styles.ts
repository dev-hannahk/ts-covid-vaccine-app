import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  margin-right: 60px;
`;

export const TitleBox = styled.div`
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

export const Nav = styled.div`
  width: 240px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
`;

export const NavLi = styled(NavLink)`
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
