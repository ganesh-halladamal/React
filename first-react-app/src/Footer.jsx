import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 40px 20px;
  color: white;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Exclamatory Labs Pvt. Ltd. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
