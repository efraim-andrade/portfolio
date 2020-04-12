import React, { useEffect, useState } from 'react';

import { ReactComponent as ThatsMeSvg } from '~/assets/thats-me.svg';

import { Container } from './styles';

const ThatsMe: React.FC = () => {
  const [currentAnimation, setCurrentAnimation] = useState('showBottom');

  const theFullAnimation = {
    bottom: [
      '-36%',
      '-10%',
      '-10%',
      '-10%',
      '-40%',
      '70%',
      '73%',
      '73%',
      '73%',
      '73%',
      '5%',
    ],
    right: [
      '-2rem',
      '-2rem',
      '-2rem',
      '-2rem',
      '-25rem',
      '-30rem',
      '-8rem',
      '-8rem',
      '-8rem',
      '-8rem',
    ],
    transform: [
      'rotate(0)',
      'rotate(0)',
      'rotate(0)',
      'rotate(0)',
      'rotate(0)',
      'rotate(-110deg)',
      'rotate(-70deg)',
      'rotate(-70deg)',
      'rotate(-70deg)',
      'rotate(-70deg)',
      'rotate(1deg)',
    ],
    height: [
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '25vh',
      '100vh',
    ],
    width: [
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '11vw',
      '50vw',
    ],
  };

  useEffect(() => {
    setCurrentAnimation('showLeft');
  }, [currentAnimation]);

  return (
    <Container
      animate={theFullAnimation}
      transition={{
        ease: 'easeOut',
        duration: 8,
      }}
    >
      <ThatsMeSvg />
    </Container>
  );
};

export default ThatsMe;
