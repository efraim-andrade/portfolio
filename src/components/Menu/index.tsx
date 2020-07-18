import React, { useCallback, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { Container } from './styles';
import items from './items';

const Menu: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const isDesktop = window.innerWidth > 1200;

    if (isDesktop) {
      setTimeout(() => {
        controls.start({
          width: '75%',
        });
      }, 7600);
    }
  }, [controls]);

  const handleExternalLinks = useCallback(
    (item: string) => item.includes('https://'),
    []
  );

  return (
    <Container animate={controls}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target={handleExternalLinks(item.link) ? '_blank' : ''}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Menu;
