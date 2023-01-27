import './DiscoveryGame.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
 
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
        <img src={scope} className='trove__mp_img'/>
        <img src={MrElbertson} className='trove__mp_img'/>
        <div>no more world</div>
        <div>Goodbye world</div>
        <div>Hello World</div>

      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};
 

export default DiscoveryGame;
