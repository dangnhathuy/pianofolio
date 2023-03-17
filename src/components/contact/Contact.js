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
        <ContactHeading>LET'S CONNECT</ContactHeading>
        <ContentContainer>
          <ContactText
            margin="15px 0 40px 30px"
            maxWidth="30%"
            animation="translateYDown 900ms ease-out forwards"
          >
            I'M ALWAYS INTERESTED ABOUT OPPORTUNITIES TO WORK ON CHALLENGING AND
            EXCITING WEB PROJECTS. 


          </ContactText>
          <Footer trackIndex={trackIndex} />
        </ContentContainer>
      </SectionMainContainer>
    </>
  );
}

const SectionMainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 1em;
`;

const ContactHeading = styled.h2`
  font-family: var(--unicaone);
  font-size: clamp(100px, 10vw, 165px);
  margin: 16px 16px 0;
  max-width: 400px;
  line-height: 0.85;
  animation: translateYDown 700ms ease-out forwards;

  @media (max-width: 1250px) {
    margin: 0;
  }
`;

const ContactText = styled(Text)`
  @media (max-width: 1250px) {
    margin: 10px;
    max-width: 600px;
  }

  @media (max-width: 650px) {
    margin: 10px;
    max-width: 400px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
`;



export default Contact;