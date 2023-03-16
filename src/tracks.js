import Ondine from "./music/Ondine.mp3";
import LeGibet from "./music/Le Gibet.mp3";
import Scarbo from "./music/Scarbo.mp3";

import ulysses from './images/ondine/ulysses.jpg';


import gibet from './images/le gibet/gibet.jpg';

import demon from './images/scarbo/demon.jpg';

const tracks = [ 
    {
        text: 'I. Ondine',
        audio: Ondine,
        hero: ulysses,
        color1: '#00193d',
        color1bg: 'rgba(0, 25, 61, 0.8)',
        color2: '#52c2ff'
    },
    {
        text: 'II. Le Gibet',
        audio: LeGibet,
        hero: gibet,
        color1: '#1d0045',
        color1bg: 'rgb(30, 0, 71, 0.8)',
        color2: '#54f7f2'
    },
    {
        text: 'III. Scarbo',
        audio: Scarbo,
        hero: demon,
        color1: '#000000',
        color1bg: 'rgba(0, 0, 0, 0.8)',
        color2: '#ff0000'
    },
];

export default tracks;