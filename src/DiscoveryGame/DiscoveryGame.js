

import ReactAudioPlayer from 'react-audio-player';
import './DiscoveryGame.css'
import React from 'react';
import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
import Jermy from '../imgs/jerma.gif'
import MeepMerp from '../mp3/MeepMerp.mp3'
import OTheJermy from '../mp3/Jerma_misery.mp3'
import { useSwipeable } from 'react-swipeable';
 


const DiscoveryGame= () =>{
  const [index, setIndex] = React.useState(0);
  const slides = [
    {
      url: require('../imgs/jerma.gif'),
      alt: 'Image 1',
      header: 'Slide 1',
      audio: require('../mp3/MeepMerp.mp3'),
    },
    {
      url: require('../imgs/jerma-burger.gif'),
      alt: 'Image 2',
      header: 'Slide 2',
      audio: require('../mp3/Jerma_misery.mp3'),
    },
    {
      url: require('../imgs/ScaryJerma.png'),
      alt: 'Image 3',
      header: 'Slide 3',
      audio: require('../mp3/MeepMerp.mp3'),
    },
  ];

 

  const swipeableProps = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => setIndex(prevIndex => (prevIndex + 1) % slides.length),
    onSwipedRight: () => setIndex(prevIndex => (prevIndex + 1) % slides.length),
  });
  
  return (
    <div className='container' {...swipeableProps}>
      <h2 className="SongName">{slides[index].header}</h2>
      <img src={slides[index].url} alt={slides[index].alt} className="trove__mp_img"/>
      <ReactAudioPlayer src={slides[index].audio} className="SongDuration" autoPlay controls/>
      <button onClick={() => setIndex(prevIndex => (prevIndex + 1) % slides.length)} className='Swipe-Left'>Previous</button>
      <button onClick={() => setIndex(prevIndex => (prevIndex + 1) % slides.length)} className='Swipe-right'>Next</button>
      
    </div>
  );
};
 

export default DiscoveryGame;

