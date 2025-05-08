import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarContext } from '../context/SidebarContext';

const Layout = ({ children }) => {
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <MainContent $sidebarOpen={sidebarOpen}>
        {children}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 64px;
  margin-left: ${props => props.$sidebarOpen ? '280px' : '0'};
  transition: margin-left 0.3s ease;
  padding: 24px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 16px;
  }
`;

export default Layout;