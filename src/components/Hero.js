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
            margin='1em 1em 1.5em' 
            textAlign='right'
            maxWidth='540px'
            animation = 'translateXToLeft 1600ms ease-out forwards'
            >
              I AM A SELF TAUGHT FRONT-END WEB DEVELOPER.
              I AM CURRENTLY IN MY SECOND YEAR AT YORK UNIVERSITY STUDYING COMPUTER SCIENCE.
              I LOVE NATURE, COFFEE, AND CLASSICAL MUSIC.
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
  @media (max-width: 1012px) {
    text-align: left;
    margin: 0 25px 2em;
  }
`


export default Hero;
