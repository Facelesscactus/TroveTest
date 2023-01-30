import ReactAudioPlayer from 'react-audio-player';
import './DiscoveryGame.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
import Jermy from '../imgs/jerma.gif'
import MeepMerp from '../mp3/MeepMerp.mp3'
import OTheJermy from '../mp3/Jerma_misery.mp3'
 


const DiscoveryGame = () => {
  let reactSwipeEl;
 
  return (
    <div className='container'>
      <ReactSwipe
        className="DiscoveryGame"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <div className="SongName">Jermas Face</div>
          <div className="control">
            <img src={scope} className='trove__mp_img'/>
            <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
            <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
          </div>
        
          <ReactAudioPlayer src={MeepMerp} autoPlay controls className="SongDuration"/>
        
        </div>
        <div>
          <div className="SongName">Jermas Face</div>
          <div className="control">
          <img src={MrElbertson} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
          </div>
          <ReactAudioPlayer src={OTheJermy} autoPlay controls className="SongDuration"/>
        </div>
        <div>
          
          <img src={Jermy} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
        </div>
        
        

        
      </ReactSwipe>
      
    </div>
  );
};
 

export default DiscoveryGame;