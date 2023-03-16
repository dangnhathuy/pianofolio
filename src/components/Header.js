import React from 'react';
import styled from 'styled-components'; 
import tracks from '../tracks';


const pages = [
  {
      text: 'about', 
      destination: 'about',
      animation: 'translateXToLeft 1000ms ease-out forwards'
  },

  {
      text: 'work', 
      destination: 'projects',
      animation: 'translateXToLeft 1200ms ease-out forwards'
  },

  {
      text: 'contact', 
      destination: 'contact',
      animation: 'translateXToLeft 1600ms ease-out forwards'
  },
];

const Header = ({ trackIndex }) => {
    return(
    <HeaderContainer>
      <MainHeader>
        <Button 
          color = {tracks[trackIndex].color2}
          onClick={() => {window.location.replace('#');}}
          >
          HD
        </Button>
        <NavContainer>
              <LinksContainer>
                  {
                    pages.map(page => (          
                      <Link 
                        key={page.text} 
                        animation = {page.animation} 
                        color = {tracks[trackIndex].color2} 
                        onClick={() => {window.location.replace('#' + page.destination);}}
                        >
                      {page.text}
                      </Link>  
                    ))
                  }
              </LinksContainer>
        </NavContainer>
      </MainHeader>
    </HeaderContainer>
    );
  };


const HeaderContainer = styled.header`
  backdrop-filter: blur(2px);
  font-weight: 200;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0;
`

const MainHeader = styled.div`
  width: 97%;
  height: 100%;
  border-bottom: 1px solid rgba(245,238,230,.5);
  box-sizing: border-box;
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding 0;
`

const Link = styled.a`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  cursor: pointer;
  transition: all 0.3s;
  animation: ${(props) => props.animation || ''}; 
  &:hover {
    color: ${(props) => props.color || 'var(--blue)'};
}
`

const Button = styled.button`
    background: transparent;
    border-color: transparent;
    display: flex;
    justify-content: center;
    font-family: var(--unicaone);
    font-size: 30px;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    animation: translateXToRight 700ms ease-out forwards;
    &:hover {
      color: ${(props) => props.color || 'var(--blue)'};
  }
`



export default Header;
