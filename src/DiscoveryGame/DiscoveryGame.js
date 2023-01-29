import './DiscoveryGame.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
import Jermy from '../imgs/jerma.gif'
 
/*
const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      backgroundColor: '#FEA900',
    },
    slide2: {
      backgroundColor: '#B3DC4A',
    },
    slide3: {
      backgroundColor: '#6AC0FF',
    },
  };

    <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>

  */


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
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <img src={scope} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
        </div>
        <div>
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <img src={MrElbertson} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
        </div>
        <div>
          <button onClick={() => reactSwipeEl.next()} className='Swipe-right'>Next</button>
          <img src={Jermy} className='trove__mp_img'/>
          <button onClick={() => reactSwipeEl.prev()} className='Swipe-Left'>Previous</button>
        </div>
        
        

        
      </ReactSwipe>
    </div>
  );
};
 

export default DiscoveryGame;
