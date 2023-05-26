import {React, useState, useEffect, useRef, useCallback} from 'react';
import './App.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
    // Update the background based on the current track
    const heroBg = document.getElementById('hero-background');

    // Update the background opacity based on the scroll position
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const heroHeight = document.getElementById('hero').offsetHeight;

        if (innerHeight + scrollY >= heroHeight) {
          heroBg.style.opacity = 1 - scrollY / 800;
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
                        value: '#ffffff',
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
    </>
  );
};

export default App;