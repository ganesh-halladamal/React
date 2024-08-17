import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #764ba2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #667eea;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <Title>Welcome to Exclamatory Labs</Title>
      <Subtitle>Innovative Solutions for Your Business</Subtitle>
      <Button>Get Started</Button>
    </Hero>
  );
};

export default HeroSection;
