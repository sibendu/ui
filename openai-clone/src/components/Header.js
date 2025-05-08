import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { SidebarContext } from '../context/SidebarContext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LeftSection>
          <SidebarToggle onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </SidebarToggle>
          <Logo to="/">
            <LogoText>OpenAI</LogoText>
          </Logo>
        </LeftSection>

        <NavLinks>
          <NavItem>
            <NavLink to="/research">Research</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/products">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/api">API</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/chatgpt">ChatGPT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/safety">Safety</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/company">Company</NavLink>
          </NavItem>
        </NavLinks>

        <RightSection>
          <ThemeToggle onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <SignInButton to="/login">Log in</SignInButton>
          <TryButton to="/try">Try ChatGPT</TryButton>
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  transition: var(--transition);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
  max-width: 1440px;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const SidebarToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 16px;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 12px;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 16px;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const SignInButton = styled(Link)`
  padding: 8px 16px;
  margin-right: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--nav-bg);
  }
`;

const TryButton = styled(Link)`
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  background-color: var(--primary-color);
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export default Header;