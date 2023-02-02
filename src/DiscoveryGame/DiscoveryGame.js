import ReactAudioPlayer from 'react-audio-player';
import './DiscoveryGame.css'
import React from 'react';
import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
import Jermy from '../imgs/jerma.gif'
import MeepMerp from '../mp3/MeepMerp.mp3'
import OTheJermy from '../mp3/Jerma_misery.mp3'
import SwipeableViews from 'react-swipeable-views';
 


const DiscoveryGame= () =>{
  const [index, setIndex] = React.useState(0);
  const numOfSlides = 2;

  const handleChangeIndex = (newIndex) => {
    if (newIndex >= numOfSlides) {
      setIndex(numOfSlides - 1);
    } else {
      setIndex(newIndex);
    }
  };
  
  



  return (
    <div className='container'>
      <SwipeableViews className='DiscoveryGame' index={index} onChangeIndex={handleChangeIndex} enableMouseEvents>
        <div>
          <div className="SongName">Jermas Face</div>
          <div className="control">
            <img src={scope} className='trove__mp_img'/>
            <button onClick={() => setIndex(index + 1)} className='Swipe-right'>Next</button>
            <button onClick={() => setIndex(index - 1)} className='Swipe-Left'>Previous</button>
          </div>
        
          <ReactAudioPlayer src={MeepMerp} autoPlay controls className="SongDuration"/>
        
        </div>
        <div>
          <div className="SongName">Jermas Face</div>
          <div className="control">
          <img src={MrElbertson} className='trove__mp_img'/>
          <button onClick={() => setIndex(index + 1)} className='Swipe-right'>Next</button>
          <button onClick={() => setIndex(index - 1)} className='Swipe-Left'>Previous</button>
          </div>
          <ReactAudioPlayer src={OTheJermy} autoPlay controls className="SongDuration"/>
        </div>
        <div>
          
          <img src={Jermy} className='trove__mp_img'/>
          <button onClick={() => setIndex(index + 1)} className='Swipe-right'>Next</button>
          <button onClick={() => setIndex(index - 1)} className='Swipe-Left'>Previous</button>
        </div>
        
        

        
      </SwipeableViews>
      
    </div>
  );
};
 

export default DiscoveryGame;