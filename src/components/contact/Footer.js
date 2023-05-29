import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; 
import tracks from '../../tracks';
import Credits from './Credits';

const pages = [
  {
      text: 'GITHUB', 
      destination: 'https://github.com/dangnhathuy',
      animation: 'translateXToRight 1200ms ease-out forwards'
  },

  {
      text: 'LINKEDIN', 
      destination: 'https://www.linkedin.com/in/nhathd9/',
      animation: 'translateXToRight 1000ms ease-out forwards'
  },

  {
      text: 'INSTAGRAM', 
      destination: 'https://www.instagram.com/nhathd03',
      animation: 'translateXToRight 800ms ease-out forwards'
  },

  {
      text: 'TWITTER',
      destination: 'https://twitter.com/ravelenjoyer',
      animation: 'translateXToRight 600ms ease-out forwards'
  },
];

const Footer = ({ trackIndex }) => {

  const [isOpen, setIsOpen] = useState("initial");

  useEffect(() => {
    if (isOpen === true) {
        document.body.style.height = '100%';
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.height = '';
        document.body.style.overflowY = '';
      }
}, [isOpen]);

  const toggleCredits = () => {
    setIsOpen(isOpen === "initial" ?  true : !isOpen );
  }

    return(
      <MainContainer>
        <Button 
          color={tracks[trackIndex].color2} 
          href="mailto:nhathd9@gmail.com"
          >
            CONTACT ME
        </Button>
        <FooterContainer>
            <NavContainer>
                  <LinksContainer>
                      {
                        pages.map(page => (          
                          <Link 
                            key={page.text} 
                            animation={page.animation} 
                            color = {tracks[trackIndex].color2}
                            href = {page.destination}
                            >
                          {page.text}
                          </Link>  
                        ))
                      }

                  </LinksContainer>
 
            </NavContainer>
            <Link 
                        animation='translateXToLeft 1000ms ease-out forwards' 
                        color = {tracks[trackIndex].color2} 
                        onClick = {() => toggleCredits()}
                      >
                        CREDITS
            </Link>  
          </FooterContainer>
          <Credits trackIndex={trackIndex} isOpen={isOpen} toggleCredits={toggleCredits}/>
      </MainContainer>
    );
  };


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin: 5px 30px 5px;

  @media (max-width: 1250px) {
    margin: 0;
  }
`

const FooterContainer = styled.footer`
  backdrop-filter: blur(2px);
  font-weight: 200;

  padding: 1em 0;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid rgba(245,238,230,.5);

  margin-top: 20px;

`



const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;


`

const LinksContainer = styled.div`
  display: flex;  
  flex-direction: row;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`

const Link = styled.a`
  font-size: var(--smallest-text);
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  color: white;
  text-decoration: none;
  cursor: pointer;
  animation: ${(props) => props.animation || ''}; 
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.color || 'var(--blue)'};
}
`
const Button = styled.a`
  color: black;
  font-weight: 200;
  text-align: center;
  padding: 0.5em 0;
  text-decoration: none;
  width: 200px;
  background-color: white;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover { 
    transform: scale(1.05); 
    color: ${(props) => props.color || ''}; 
    }
  @media (max-width: 550px) {
    width: 150px;
    font-size: 15px;
  }
  
`

export default Footer;
