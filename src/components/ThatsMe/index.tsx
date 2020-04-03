import React from 'react';

import { ReactComponent as ThatsMeSvg } from '~/assets/thats-me.svg';

import { Container } from './styles';

const ThatsMe: React.FC = () => {
  return (
    <Container>
      <ThatsMeSvg />
    </Container>
  );
};

export default ThatsMe;
