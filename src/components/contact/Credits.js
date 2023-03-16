import React from 'react';
import styled from 'styled-components'; 
import tracks from '../../tracks';
import { Text } from '../reusable-components/Texts'
import { TfiClose } from 'react-icons/tfi';

const Credits = ({ trackIndex, isOpen, toggleCredits }) => {

    return(
      <>
        <Blur 
          visibility = {isOpen === 'initial' ? 'hidden' : isOpen ? 'visible' : 'hidden'}
          opacity = {isOpen === 'initial' ? '0' : isOpen ? '1' : '0'}
          animation = {
            isOpen === 'initial' ? '' : 
            isOpen ? 'fadeIn 800ms ease-in-out' : 'fadeOut 800ms ease-in-out'
          }
          >
        </Blur>
        <CreditsContainer  
          right = {
            isOpen === 'initial' ? '-600px':
            isOpen ? '0' : '-600px'
          }

          animation = {
            isOpen === 'initial' ? '' : 
            isOpen ? 'creditOpen 1000ms ease-in-out' : 'creditClose 1000ms ease-in-out'
          }
          
          backgroundColor = {tracks[trackIndex].color1}
          >
          <HeaderContainer>
            <Text margin = '21px 0 12px'> CREDITS </Text>
            <IconContainer 
              color = {tracks[trackIndex].color2} 
              onClick = {() => toggleCredits()}
              >
              <TfiClose />
            </IconContainer>
          </HeaderContainer>
          <ContentContainer>
            <Text fontSize='var( --smallest-text)' margin = '30px 0'>
              Music:
            </Text>
            <Text fontSize='var( --smaller-text)' margin = '1em 0.5em'>
              GASPARD DE LA NUIT, MAURICE RAVEL
            </Text>
            <Text fontSize='var( --smallest-text)' margin = '0.5em 1em'>
              I. Ondine, II. Le Gibet - Performed by Louis Lortie
            </Text>
            <Text fontSize='var( --smallest-text)' margin = '0.5em 1em'>
              III. Scarbo - Performed by Benjamin Grovsner
            </Text>
          </ContentContainer>
        </CreditsContainer>
      </>
    );
  };



const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 22;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  transition: all 0.5s ease-out;
  visibility: ${(props) => props.visibility || ''};
  opacity: ${(props) => props.opacity || ''};
  animation: ${(props) => props.animation || 'var(--blue)'};


`

const CreditsContainer = styled.aside`
  position: fixed;
  z-index: 33;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100vh;
  box-sizing: border-box;
  padding: 1em 2em;
  top: 0;
  
  background-color: ${(props) => props.backgroundColor || ''};
  right: ${(props) => props.right || ''};
  animation: ${(props) => props.animation || ''};

  @media (max-width: 600px) {
    width: 100vw;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

const IconContainer = styled.div`
font-size: 20px;
height: 66px;
display: flex;
align-items: center;
transition: all 0.3s;
cursor: pointer;
&:hover {
  color: ${(props) => props.color || ''};
}
`

const ContentContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(245,238,230,.5);
`


export default Credits;
