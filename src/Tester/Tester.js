import scope from '../imgs/ScaryJerma.png'
import MrElbertson from '../imgs/jerma-burger.gif'
import Jermy from '../imgs/jerma.gif'


import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Swiper = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      url: require('../imgs/jerma.gif'),
      alt: 'Image 1',
      header: 'Slide 1',
      body: 'Body text for Slide 1',
    },
    {
      url: require('../imgs/jerma-burger.gif'),
      alt: 'Image 2',
      header: 'Slide 2',
      body: 'Body text for Slide 2',
    },
    {
      url: require('../imgs/ScaryJerma.png'),
      alt: 'Image 3',
      header: 'Slide 3',
      body: 'Body text for Slide 3',
    },
  ];

  const swipeableProps = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => setIndex(prevIndex => (prevIndex + 1) % slides.length),
    onSwipedRight: () => setIndex(prevIndex => (prevIndex + 1) % slides.length),
  });

  return (
    <div {...swipeableProps}>
      <img src={slides[index].url} alt={slides[index].alt} />
      <h2>{slides[index].header}</h2>
      <p>{slides[index].body}</p>
    </div>
  );
};

export default Swiper;