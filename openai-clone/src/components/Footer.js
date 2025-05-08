import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>OpenAI</FooterTitle>
          <FooterLinks>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/charter">Charter</FooterLink>
            <FooterLink to="/security">Security</FooterLink>
            <FooterLink to="/customer-stories">Customer Stories</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>API</FooterTitle>
          <FooterLinks>
            <FooterLink to="/api/overview">Overview</FooterLink>
            <FooterLink to="/api/pricing">Pricing</FooterLink>
            <FooterLink to="/api/docs">Documentation</FooterLink>
            <FooterLink to="/api/status">Status</FooterLink>
            <FooterLink to="/api/login">Login</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>ChatGPT</FooterTitle>
          <FooterLinks>
            <FooterLink to="/chatgpt/overview">Overview</FooterLink>
            <FooterLink to="/chatgpt/enterprise">Enterprise</FooterLink>
            <FooterLink to="/chatgpt/pricing">Pricing</FooterLink>
            <FooterLink to="/chatgpt/try">Try ChatGPT</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLinks>
            <FooterLink to="/terms">Terms of Use</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/trademark-policy">Trademark Policy</FooterLink>
            <FooterLink to="/brand-guidelines">Brand Guidelines</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>© 2025 OpenAI Clone</Copyright>
        <SocialLinks>
          <SocialLink href="https://twitter.com/openai" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
          <SocialLink href="https://github.com/openai" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
          <SocialLink href="https://www.youtube.com/channel/UCXZCJLdBC09xxGZ6gUTLZfA" target="_blank" rel="noopener noreferrer">YouTube</SocialLink>
          <SocialLink href="https://www.linkedin.com/company/openai" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--nav-bg);
  border-top: 1px solid var(--border);
  padding: 48px 24px 24px;
  margin-top: 64px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  color: var(--text);
  opacity: 0.8;
  margin-bottom: 8px;
  transition: var(--transition);
  
  &:hover {
    opacity: 1;
    color: var(--primary-color);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--text);
  opacity: 0.7;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  font-size: 0.9rem;
  color: var(--text);
  opacity: 0.8;
  transition: var(--transition);
  
  &:hover {
    opacity: 1;
    color: var(--primary-color);
  }
`;

export default Footer;