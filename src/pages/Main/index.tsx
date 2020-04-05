import React from 'react';

import { ThatsMe } from '~/components';

import { Banner } from './components';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Banner />

      <ThatsMe />
    </Container>
  );
}
