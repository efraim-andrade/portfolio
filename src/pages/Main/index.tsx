import React from 'react';

import { ThatsMe, Menu } from '~/components';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Menu />

      <ThatsMe />
    </Container>
  );
}
