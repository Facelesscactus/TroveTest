import './DiscoveryGame.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
import Jermy from '../imgs/jerma.gif'
 


const DiscoveryGame = () => {
  let reactSwipeEl;
 
  return (
    <div>
      <ReactSwipe
        className="DiscoveryGame"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <div className="SongName">Jermas Face</div>
          <div className="SongDuration">22:15:12</div>
          
          
          <img src={scope} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
          
        </div>
        <div>
          
          <img src={MrElbertson} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
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
