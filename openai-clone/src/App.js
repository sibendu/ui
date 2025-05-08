import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <SidebarProvider>
          <GlobalStyles />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </SidebarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
