import React from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 80px 0;
  background-color: #f7f7f7;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 50px;
  color: #764ba2;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #777;
`;

const Services = () => {
  return (
    <ServicesSection>
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesContainer>
        <ServiceCard>
          <ServiceIcon><FaCode /></ServiceIcon>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>Custom web development solutions to fit your needs.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon><FaMobileAlt /></ServiceIcon>
          <ServiceTitle>Mobile Apps</ServiceTitle>
          <ServiceDescription>Creating mobile applications that stand out.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon><FaCloud /></ServiceIcon>
          <ServiceTitle>Cloud Services</ServiceTitle>
          <ServiceDescription>Secure and scalable cloud services for your business.</ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
