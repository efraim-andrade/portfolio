import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  InstagramAlt,
  LinkedinSquare,
  Medium,
  Twitter,
  Github,
} from '@styled-icons/boxicons-logos';
// import { DownArrowAlt } from '@styled-icons/boxicons-regular';

import { Menu, ToggleTheme } from '~/components';

import { Container } from './styles';

const socials = [
  { id: 0, icon: <Github />, link: 'https://github.com/efraim-andrade' },
  {
    id: 1,
    icon: <LinkedinSquare />,
    link: 'https://www.linkedin.com/in/efraim-andrade-morais-junior-517b0a149/',
  },
  {
    id: 2,
    icon: <InstagramAlt />,
    link: 'https://www.instagram.com/efraim.am/',
  },
  { id: 3, icon: <Twitter />, link: 'https://twitter.com/DevEfraim' },
  { id: 4, icon: <Medium />, link: 'https://medium.com/@efraim.dev' },
];

const Banner: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const isDesktop = window.innerWidth > 1200;

    if (isDesktop) {
      setTimeout(() => {
        controls.start({
          marginRight: '0rem',
          transition: { duration: 1 },
        });
      }, 2400);
    }
  }, [controls]);

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
        <div className="socials">
          {socials.map((link) => (
            <a
              key={link.id}
              target="_blank"
              href={link.link}
              className="link"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a href="#work" className="anchor-down">
          {/* <DownArrowAlt /> */}
        </a>

        <motion.div className="toggle" animate={controls}>
          <ToggleTheme />
        </motion.div>
      </footer>
    </Container>
  );
};

export default Banner;
