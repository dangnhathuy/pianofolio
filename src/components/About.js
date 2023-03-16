import React from 'react';
import styled from 'styled-components'; 
import { SubHeading, Gloock, Text} from './reusable-components/Texts';
import { SectionMainContainer } from './reusable-components/Containers';


const About = () => {

    return(
    <> 
      <SectionMainContainer  alignItems = 'flex-end'>
          <TextContainer id = "about">
            <Gloock 
              margin='5px 5px 5px 5px'
              animation='translateYDown 700ms ease-out forwards'
              >Hello, I am
            </Gloock>
            <SubHeading animation='translateYDown 900ms ease-out forwards'>HUY DANG</SubHeading>
            <Text 
              animation='translateYDown 1100ms ease-out forwards' 
              margin='30px 5px' 
              lineHeight='1.5'
              >
              I ENJOY CREATING WEBSITES AND APPLICATIONS THAT ARE FUNCTIONAL AND VISUALLY APPEALING.
              I AM EXPERIENCED IN REACT.JS AND NODE.JS. I LOVE WORKING HANDS ON WITH THE LATEST TRENDS AND TECHNOLOGIES. 
              OUTSIDE OF WEB DEVELOPMENT, I AM ALSO WORKING TO EXPAND MY KNOWLEDGE AND SKILLS
              IN MACHINE LEARNING AND DATA SCIENCE.
            </Text>
          </TextContainer>
      </SectionMainContainer>
    </>
    );
  };




const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding-top: 20vh;
`

export default About;
