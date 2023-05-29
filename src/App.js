import {React, useState, useEffect, useRef, useCallback} from 'react';
import './App.css';

import Header from './components/header/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact/Contact';

import tracks from './tracks';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const audioRef = useRef(new Audio(tracks[trackIndex].audio));
  const volumeRef = useRef(null);
  
  const changeTrack = () => {
    const newIndex = trackIndex === 2 ? 0 : trackIndex + 1;
    setTrackIndex(newIndex);
    console.log(trackIndex);
    document.documentElement.style.scrollBehavior = "auto";

    window.location.replace('#');
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 300) 
  }

  useEffect(() => {
    // Update the background opacity based on the scroll position
    const handleScroll = () => {
      const heroBg = document.getElementById('hero-background');
      const { innerHeight, innerWidth, scrollY } = window;
      const heroHeight = document.getElementById('hero').offsetHeight;
      if (innerWidth <= 600) {
        heroBg.style.display = 'none';
      } else {
        if (innerHeight + scrollY >= heroHeight) {
          heroBg.style.opacity = 1 - scrollY / 800;
        }
        if (heroBg.style.opacity <= 0) {
          heroBg.style.display = 'none';
        } else {
          heroBg.style.display = 'block';
        }
      }
    }; 
   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  useEffect(() => {
    const audioPlayer = audioRef.current;
    audioPlayer.pause();
    audioPlayer.src = tracks[trackIndex].audio;
    audioPlayer.volume = isMute ? 0 : volume;
    if (isPlaying) {
      audioPlayer.play();
    }
  }, [trackIndex]);

  useEffect(() => {
      if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
  }, [isPlaying]);

  useEffect(() => {
      audioRef.current.volume = volume;
      const handleWheel = (event) => {
        event.preventDefault();
        if (volumeRef.current) {
          const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
          setVolume(prevVolume => {
            let newVolume = parseFloat((parseFloat(prevVolume) + (delta * 0.05)).toFixed(2));
            if (newVolume < 0) {
              newVolume = 0;
            } else if (newVolume > 1) {
              newVolume = 1;
            }
            return newVolume;
          });
        }
      };
  
      const element = volumeRef.current;
      if (element) {
        element.addEventListener('wheel', handleWheel);
        return () => {
          element.removeEventListener('wheel', handleWheel);
        };
      }
  }, [volume]);


  useEffect(() => {
    if (isMute)
      audioRef.current.volume = 0;
    else
    audioRef.current.volume = volume;
  }, [isMute]);


  useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener('ended', changeTrack);

    return () => {
      audio.removeEventListener('ended', changeTrack);
    };
  }, [changeTrack]);

  return (
    <div style={{backgroundColor: tracks[trackIndex].color1}}>
        <Header
          trackIndex={trackIndex}
          changeTrack={changeTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isMute={isMute}
          setIsMute={setIsMute}
          volume={volume}
          setVolume={setVolume}
          volumeRef={volumeRef}
        />
        <Hero trackIndex={trackIndex}/>
        <About trackIndex={trackIndex} id="about"/>
        <Projects id="projects"/>
        <Contact id="contact" trackIndex={trackIndex}/>
    </div>
  );
};

export default App;