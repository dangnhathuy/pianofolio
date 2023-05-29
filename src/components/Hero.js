import React from 'react';
import styled from 'styled-components'; 

import tracks from '../tracks';
import { BigHeading, Text} from './reusable-components/Texts';

const Hero = ({ trackIndex }) => {

    return(
    <>
    <img id="hero-background" src={tracks[trackIndex].hero} alt="background"/>
    <SectionMainContainer id = "hero">
      <ContentContainer>
        <BigHeading animation = 'translateXToRight 1200ms ease-out forwards'>HUY DANG</BigHeading>
 
          <HeroText 
            fontSize='var(--slightly-bigger-text)'
            margin='1em 1em 1.5em'
            lineHeight="1.3" 
            textAlign='right'
            maxWidth='540px'
            animation = 'translateXToLeft 1600ms ease-out forwards'
            >
              Hello, I'm a second year Computer Science student at York University. 
              I love classical music and web development :)
          </HeroText>

      </ContentContainer>
    </SectionMainContainer>
    </>
    );
  };



const SectionMainContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: flex-end;

`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  width: 100%;
`

const HeroText = styled(Text)`
@media (max-width: 1002px) {
  text-align: left;
  margin: 0em 2em 2em 1.5em;
}
`


export default Hero;
