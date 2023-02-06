

import ReactAudioPlayer from 'react-audio-player';
import './DiscoveryGame.css'
import React from 'react';
import { useSwipeable } from 'react-swipeable';
 


const DiscoveryGame = () => {
  const [index, setIndex] = React.useState(0);
  const [accept, setAccept] = React.useState(0);
  const [deny, setDeny] = React.useState(0);

  const slides = [
    {
      url: require('../imgs/Reflection.jpg'),
      alt: 'Image 1',
      header: 'Reflection',
      audio: require('../mp3/Reflection.mp3'),
    },
    {
      url: require('../imgs/Resurrections.jpg'),
      alt: 'Image 2',
      header: 'Resurrections',
      audio: require('../mp3/Resurrections.mp3'),
    },
    {
      url: require('../imgs/Farewell.jpg'),
      alt: 'Image 3',
      header: 'Farewell',
      audio: require('../mp3/Farewell.mp3'),
    },
    {
      url: require('../imgs/Farewell.jpg'),
      alt: 'Image 3',
      header: 'got through the Discover Game',
      audio: require('../mp3/Farewell.mp3'),
    },
  ];

  const swipeableProps = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => {
      if (index === slides.length - 1) return;
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setAccept(accept + 1);
    },
    onSwipedRight: () => {
      if (index === slides.length - 1) return;
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setDeny(deny + 1);
    },
  });
  
  return (
    <div className="div">
      <div className='container' {...swipeableProps}>
      <h2 className="SongName">{slides[index].header}</h2>
        <img src={slides[index].url} alt={slides[index].alt} className="trove__mp_img"/>
        <ReactAudioPlayer src={slides[index].audio} className="SongDuration" autoPlay controls/>
        
        
        <button onClick={() => {if (index === slides.length - 1) return;
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setDeny(deny + 1);
        }} className='Swipe-Left'>Previous</button>


        <button onClick={() => {if (index === slides.length - 1) return;
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setAccept(accept + 1);
        }} className='Swipe-right'>Next</button>
        
      </div>
      <div className="show-number">{accept}jeff</div>
      <div className="show-number">{deny}dennim</div>
    </div>
  );
};


export default DiscoveryGame;

