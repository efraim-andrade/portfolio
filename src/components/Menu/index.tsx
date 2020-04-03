import React, { useCallback } from 'react';

import { Container } from './styles';
import items from './items';

const Menu: React.FC = () => {
  const handleExternalLinks = useCallback(
    (item: string) => item.includes('https://'),
    []
  );

  return (
    <Container>
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
