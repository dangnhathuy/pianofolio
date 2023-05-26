import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { Text, SubHeading } from '../reusable-components/Texts';

const Contact = ({ trackIndex }) => {

  return (
    <>
      <SectionMainContainer id="contact"> 
        <TextContainer>
          <SubHeading maxWidth="500px">LET'S CONNECT</SubHeading>
          <ContactText
            margin="30px 0 30px 12px"
            maxWidth="30%"
            animation="translateYDown 900ms ease-out forwards"
            lineHeight="1.3"
          >
            I'm always interested in opportunities to work on challenging and exciting web projects 😎 
          </ContactText>
        </TextContainer>
        <Footer trackIndex={trackIndex} />
      </SectionMainContainer>
    </>
  );
}

const SectionMainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 0 0 2em;
  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0 1em;
  }
`;

const ContactText = styled(Text)`
  max-width: 500px;
  @media (max-width: 1250px) {
    margin: 20px 5px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 1250px) {
    align-self: flex-start;
  }
`;



export default Contact;