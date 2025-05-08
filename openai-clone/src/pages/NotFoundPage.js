import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
        <NotFoundDescription>
          The page you are looking for doesn't exist or has been moved.
        </NotFoundDescription>
        <HomeButton to="/">Go to Homepage</HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 24px;
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NotFoundDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 32px;
  color: var(--text);
  opacity: 0.9;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export default NotFoundPage;