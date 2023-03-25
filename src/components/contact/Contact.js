import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ponyo from '../../images/ondine/ponyo.jpg';
import { Text } from '../reusable-components/Texts';

const Contact = ({ trackIndex }) => {

  return (
    <>
      <img id="contact-background" src={ponyo} alt="ponyo"/>
      <SectionMainContainer id="contact"> 
        <TextContainer>
          <ContactHeading>LET'S CONNECT</ContactHeading>
          <ContactText
            margin="10px 0 40px 15px"
            maxWidth="30%"
            animation="translateYDown 900ms ease-out forwards"
          >
            I'M ALWAYS INTERESTED ABOUT OPPORTUNITIES TO WORK ON CHALLENGING AND
            EXCITING WEB PROJECTS. 
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
  margin: 0 1em;
`;

const ContactHeading = styled.h2`
  font-family: var(--unicaone);
  font-size: clamp(80px, 10vw, 165px);
  margin: 5px;
  max-width: 400px;
  line-height: 0.85;
  animation: translateYDown 700ms ease-out forwards;

  @media (max-width: 1250px) {
    margin: 0;
  }


`;

const ContactText = styled(Text)`
  max-width: 500px;
  @media (max-width: 1250px) {
    margin: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
`;



export default Contact;