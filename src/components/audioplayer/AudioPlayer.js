import React from "react";
import styled from 'styled-components'; 

import { TfiClose } from 'react-icons/tfi';

import Controls from './Controls';
import Volume from "./Volume";

import tracks from "../../tracks";


const AudioPlayer = ({
  trackIndex,
  setTrackIndex,
  isPlaying,
  setIsPlaying,
  isMute,
  setIsMute,
  volume,
  setVolume,
  volumeRef,
  showAudio,
  toggleAudio
}) => {

    return(
    <AudioContainer 
      right = {
        showAudio === 'initial' ? '20px':
        showAudio ? '20px' : '-600px'
      }

      animation = {
        showAudio === 'initial' ? 'audioOpen 2000ms ease-in-out' : 
        showAudio ? 'audioOpen 1000ms ease-in-out' : 'audioClose 1000ms ease-in-out'
      }

       backgroundColor = {tracks[trackIndex].color1bg}
      >
      <ExitContainer>
        <Icon onClick={toggleAudio}>
          <TfiClose />
        </Icon>
      </ExitContainer>
      <Controls 
        isPlaying={isPlaying} 
        trackIndex={trackIndex} 
        setTrackIndex={setTrackIndex} 
        setIsPlaying={setIsPlaying}
        />    
      <Volume 
        volume={volume} 
        setVolume={setVolume} 
        volumeRef={volumeRef}
        isMute={isMute} 
        setIsMute={setIsMute}
        />
    </AudioContainer>
    );
  };


const AudioContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 150px;
    
    background-color: ${(props) => props.backgroundColor || 'rgba(0, 25, 61, 0.8)'};
    backdrop-filter: blur(3px);
    animation: fadeInDelay 2000ms ease-out forwards;

    position: fixed;
    z-index: 1;
    top: 90px;
    right: ${(props) => props.right || '-600px'};
    animation: ${(props) => props.animation || ''};
    padding: 10px;
    border-radius: 8px;

    @media (max-width: 1600px) {
      width: 200px;
      height: 100px;
    }
    
    @media (max-width: 1012px) {
      top: 85px;
    }
  
    @media (max-width: 768px) {
      width: 175px;
      height: 90px;
      padding: 10px;
    }
`
const ExitContainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--blue);
  }
`
export default AudioPlayer;