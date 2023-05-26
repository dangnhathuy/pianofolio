import React from "react";
import styled from 'styled-components';

import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeOffFill } from 'react-icons/bs';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';

  const Controls = ({ volume, setVolume, volumeRef, isMute, setIsMute, isPlaying, setIsPlaying}) => {

    const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    };

    const handleMute = () => {
    setIsMute(prevMute => !prevMute);
    };

  const playOrPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  }

    let volumeIcon;
      if (isMute) {
        volumeIcon = <BsFillVolumeMuteFill />;
      } else if (volume <= 0.35 && volume > 0) {
        volumeIcon = <BsFillVolumeDownFill />;
      } else if (volume <= 0 && !isMute) {
        volumeIcon = <BsFillVolumeOffFill />;
      } else if (volume > 0.35) {
        volumeIcon = <BsFillVolumeUpFill />;
      } else {
        volumeIcon = '';
      }

    return (
      <ControlsContainer>
          <PlayOrPause onClick={() => playOrPause()}>
            { isPlaying ? <BsPauseCircle color="var(--blue)"/> : <BsPlayCircle /> }
          </PlayOrPause>
          <VolumeContainer>
            <VolumeIcon onClick={handleMute}>
              {volumeIcon}
            </VolumeIcon>
            <VolumeSlider
                id="range"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                ref={volumeRef}
              />
        </VolumeContainer>
      </ControlsContainer>
      
    );
};

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 200px;


    position: fixed;
    left: 30px;
    top: 80px;

    @media (max-width: 768px) {
      width: 150px;
      left: 10px;
    }
`


const VolumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 5px;

  @media (max-width: 1600px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const VolumeIcon = styled.div`
  color: white;
  background-color: transparent;
  border: none;
  padding: 0 3px;
  margin-top: 2px;
  font-size: 20px;

  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--blue);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const VolumeSlider = styled.input.attrs({ type: 'range' })`

  width: 90%;
  height: 2px;
  margin: 0 0 17px 5px;
  border-radius: 5px;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    max-width: 10px;
    max-height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }

    @media (max-width: 768px) {
      width: 90px;
      height: 4px;
      margin: 0 0 14px 0;
    }
`;

const PlayOrPause = styled.button`
  display: flex;
  align-items: center;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0 3px;
  margin-top: 2px;
  font-size: 20px;

  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--blue);
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
`


export default Controls;
