import React from 'react';

import { Menu } from '~/components';

import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Menu />

      <div className="presentation">
        <h1>Efraim Andrade</h1>
        <h2>Mobile & FrontEnd Developer</h2>

        <a
          target="_blank"
          className="mail-me"
          rel="noopener noreferrer"
          href="mailto:efraim.dev+site@gmail.com"
        >
          Mail me!
        </a>
      </div>

      <footer>
        <p>many things</p>
      </footer>
    </Container>
  );
};

export default Banner;
