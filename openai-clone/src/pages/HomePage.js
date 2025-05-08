import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Creating safe AGI that benefits all of humanity</HeroTitle>
          <HeroDescription>
            OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.
          </HeroDescription>
          <HeroButtons>
            <PrimaryButton to="/research">Learn about our research</PrimaryButton>
            <SecondaryButton to="/products">Explore our products</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Our approach to AGI</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Research</FeatureTitle>
            <FeatureDescription>
              We're conducting research to make AI systems safer and more aligned with human values.
            </FeatureDescription>
            <FeatureLink to="/research">Learn more</FeatureLink>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>Products</FeatureTitle>
            <FeatureDescription>
              We're building AI tools that are useful, safe, and beneficial for humanity.
            </FeatureDescription>
            <FeatureLink to="/products">Explore products</FeatureLink>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>Safety</FeatureTitle>
            <FeatureDescription>
              We're committed to developing AI safely and responsibly.
            </FeatureDescription>
            <FeatureLink to="/safety">Our approach</FeatureLink>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <ProductsSection>
        <SectionTitle>Featured products</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductTitle>ChatGPT</ProductTitle>
            <ProductDescription>
              A conversational AI system that can engage in natural, human-like conversations.
            </ProductDescription>
            <ProductLink to="/chatgpt">Try ChatGPT</ProductLink>
          </ProductCard>
          
          <ProductCard>
            <ProductTitle>GPT-4</ProductTitle>
            <ProductDescription>
              Our most advanced system, producing safer and more useful responses.
            </ProductDescription>
            <ProductLink to="/gpt4">Learn about GPT-4</ProductLink>
          </ProductCard>
          
          <ProductCard>
            <ProductTitle>DALL·E</ProductTitle>
            <ProductDescription>
              An AI system that can create realistic images and art from a description in natural language.
            </ProductDescription>
            <ProductLink to="/dalle">Explore DALL·E</ProductLink>
          </ProductCard>
        </ProductsGrid>
      </ProductsSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Join us in shaping the future of AI</CTATitle>
          <CTADescription>
            Whether you're a researcher, developer, or just curious about AI, there are many ways to get involved.
          </CTADescription>
          <CTAButtons>
            <PrimaryButton to="/careers">View careers</PrimaryButton>
            <SecondaryButton to="/community">Join our community</SecondaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  padding: 80px 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  color: var(--text);
  opacity: 0.9;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
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

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: var(--text);
  font-weight: 500;
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--nav-bg);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 32px;
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 24px;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled.div`
  padding: 32px;
  background-color: var(--nav-bg);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px var(--shadow);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: var(--text);
  opacity: 0.9;
`;

const FeatureLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProductsSection = styled.section`
  padding: 80px 24px;
  background-color: var(--nav-bg);
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const ProductCard = styled.div`
  padding: 32px;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px var(--shadow);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: var(--text);
  opacity: 0.9;
`;

const ProductLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);
  
  &:hover {
    text-decoration: underline;
  }
`;

const CTASection = styled.section`
  padding: 80px 24px;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  color: var(--text);
  opacity: 0.9;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default HomePage;