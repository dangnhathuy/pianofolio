import React from 'react';
import styled from 'styled-components'; 
import tracks from '../tracks';
import { SubHeading, Text} from './reusable-components/Texts';
import { SectionMainContainer } from './reusable-components/Containers';

const skills = [
  {
      subtitle: 'LANGUAGES', 
      items: 'HTML, CSS, Javascript, Typescript, Python, Java, C'
  },

  {
      subtitle: 'OTHER TOOLS', 
      items: 'React.js, Node.js, Express.js, Android Studio, Git'
  }
];

const About = ({trackIndex}) => {

    return(
    <> 
      <SectionMainContainer  alignItems = 'flex-end'>
          <TextContainer id = "about">
            <SubHeading animation='translateYDown 900ms ease-out forwards'>ABOUT</SubHeading>
            <Text 
              animation='translateYDown 1100ms ease-out forwards' 
              margin='15px 5px 35px 3px' 
              lineHeight='1.5'
              fontWeight='200'
              >
              I'm passionate about Javascript, React and all things digital. 
              I love working hands on with the latest trends and technologies.
              Outside of web development, I also love to play the piano.
            </Text>
            {
              skills.map((category) => (
              <>
                <Text
                color={tracks[trackIndex].color2}
                fontSize="var(--slightly-bigger-text)"
                margin="0"
                >
                  {category.subtitle} 
                </Text>
                <Text fontWeight="200">
                  {category.items} 
                </Text>
              </>
              ))
            }

          </TextContainer>
      </SectionMainContainer>
    </>
    );
  };




const TextContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
`

export default About;
