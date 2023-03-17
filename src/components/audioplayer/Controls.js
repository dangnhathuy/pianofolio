import React from "react";
import styled from 'styled-components'; 

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';

import tracks from "../../tracks";

const Controls = ({isPlaying, trackIndex, setTrackIndex, setIsPlaying}) => {

  const changeTrack = (direction) => {
    const newIndex = direction === "left" ? (trackIndex === 0 ? 2 : trackIndex - 1) : (trackIndex === 2 ? 0 : trackIndex + 1);
    setTrackIndex(newIndex);
  }

  const playOrPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  }


    return(
        <MusicControls>
          <PlayOrPause onClick={() => playOrPause()}>
            { isPlaying ? <IoPauseCircleOutline color="var(--blue)"/> : <IoPlayCircleOutline /> }
  
          </PlayOrPause>
  
          <SelectTrack>
            <Arrow onClick={() => changeTrack('left')}> <IoIosArrowBack /> </Arrow>
  
              <TrackName>{tracks[trackIndex].text}</TrackName>
              
            <Arrow onClick={() => changeTrack('right')}> <IoIosArrowForward /> </Arrow>
          </SelectTrack>
  
        </MusicControls>
    );
}

const MusicControls = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;

`

const PlayOrPause = styled.button`
  display: flex;
  align-items: center;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0 3px;
  margin-top: 2px;
  font-size: 30px;

  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--blue);
  }
  
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
`

const SelectTrack = styled.div`
  display: flex;
  align-items: center;

`
const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  transition: all 0.3s;
  &:hover {
    color: var(--blue);
  }

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1012px) {
    font-size: 17px;
  }

`

const TrackName = styled.p`
font-family: var(--opensans);
font-weight: 200;
font-size: 22px;
width: 100px;
text-align: center;
margin: 0;

@media (max-width: 1600px) {
  font-size: 18px;
  width: 100px;
}

@media (max-width: 1012px) {
  font-size: 16px;
  width: 80px;
}



`

export default Controls;