import React from "react";
import styled from 'styled-components';

import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeOffFill } from 'react-icons/bs';

  const Volume = ({ volume, setVolume, volumeRef, isMute, setIsMute }) => {

    const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    };

    const handleMute = () => {
    setIsMute(prevMute => !prevMute);
    };

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
    );
};

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
    margin-bottom: 3px;
  }
`;

const VolumeIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--blue);
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;
const VolumeSlider = styled.input.attrs({ type: 'range' })`

  width: 90%;
  height: 2px;
  margin: 0 0 20px 5px;
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

    @media (max-width: 768px) {
      max-width: 10px;
      max-height: 10px;
    }
  }

  @media (max-width: 1600px) {
    margin: 0 0 18px 5px;
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 4px;
  }
`;

export default Volume;
