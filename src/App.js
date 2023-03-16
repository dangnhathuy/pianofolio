import {React, useState, useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';
import './App.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from './components/Header';
import AudioPlayer from './components/audioplayer/AudioPlayer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact/Contact';

import { GiMusicalScore } from 'react-icons/gi';

import tracks from './tracks';

const App = () => {
  const [showAudio, setShowAudio] = useState("initial");
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef(new Audio(tracks[trackIndex].audio));
  const volumeRef = useRef(null);
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  useEffect(() => {
    // Update the audio player with the current track and volume
    const audioPlayer = audioRef.current;
    audioPlayer.pause();
    audioPlayer.src = tracks[trackIndex].audio;
    audioPlayer.volume = isMute ? 0 : volume;
    if (isPlaying) {
      audioPlayer.play();
    }
  
    // Update the background based on the current track
    const heroBg = document.getElementById('hero-background');
    const contactBg = document.getElementById('contact-background');
    if (trackIndex !== 0) {
      contactBg.style.display = "none";
    } else {
      contactBg.style.display = "block";
    }
  
    // Update the background opacity based on the scroll position
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const heroHeight = document.getElementById('hero').offsetHeight;
      const aboutHeight = document.getElementById('about').offsetHeight;
      const projectsHeight = document.getElementById('projects').offsetHeight;
      const totalHeight = heroHeight + aboutHeight + projectsHeight;
  
      if (innerHeight + scrollY >= heroBg.offsetHeight) {
        heroBg.style.top = '-33%';
        heroBg.style.position = 'fixed';
      } else {
        heroBg.style.top = '0';
        heroBg.style.position = 'absolute';
      }
  
      if (innerHeight + scrollY >= heroHeight) {
        heroBg.style.opacity = 1 - scrollY / 800;
      }
  
      if (heroBg.style.opacity <= 0) {
        heroBg.style.display = 'none';
      } else {
        heroBg.style.display = 'block';
      }
  
      if (innerHeight + scrollY >= totalHeight) {
        const bgOpacity = (innerHeight + scrollY - totalHeight) / (document.body.offsetHeight - totalHeight);
        contactBg.style.opacity = bgOpacity;
      } else {
        contactBg.style.opacity = 0;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackIndex, isPlaying, isMute, volume, audioRef]);


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
}, [volume, isMute]);

  useEffect(() => {

  }, []);

  const toggleAudio = () => {
    setShowAudio(showAudio === "initial" ?  false : showAudio ? false : true );
  }

  return (
    <>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: tracks[trackIndex].color1,
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: tracks[trackIndex].color2,
                    },
                    links: {
                        color: "#001129",
                        distance: 150,
                        enable: false,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 400,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
        <AudioIcon 
          color={isPlaying ? tracks[trackIndex].color2 : ''}
          hoverColor={tracks[trackIndex].color2}
          visibility={showAudio === 'initial' ? 'hidden' : showAudio ? 'hidden' : 'visibile'}
          opacity={showAudio === 'initial' ? '0' : showAudio ? '0' : '1'}
          animation={
            showAudio === 'initial' ? 'fadeInDelay 2000ms ease-out forwards' : 
            showAudio ? 'fadeOut 1000ms ease-out' : 'fadeIn 1000ms ease-out'
          }
          onClick={toggleAudio}
          backgroundColor = {tracks[trackIndex].color1bg}
          >
          <GiMusicalScore />
        </AudioIcon>
        <AudioPlayer 
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isMute={isMute}
          setIsMute={setIsMute}
          volume={volume}
          setVolume={setVolume}
          volumeRef={volumeRef}
          showAudio={showAudio}
          toggleAudio={toggleAudio}
        />
        <Header trackIndex={trackIndex}/>
        <Hero trackIndex={trackIndex}/>
        <About id="about"/>
        <Projects id="projects"/>
        <Contact id="contact" trackIndex={trackIndex}/>
    </>
  );
};

const AudioIcon = styled.div`
  position: fixed;
  z-index: 2;
  font-size: 27px;
  width: 35px;
  height: 35px;

  top: 90px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  backdrop-filter: blur(5px);

  background-color: ${(props) => props.backgroundColor || 'rgba(0, 25, 61, 0.8)'};
  color: ${(props) => props.color || ''};
  visibility: ${(props) => props.visibility || ''};
  opacity: ${(props) => props.opacity || ''};
  animation: ${(props) => props.animation || ''};

  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hoverColor || 'var(--blue)'};
  }
 `

export default App;