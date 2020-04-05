import React, { useState, useCallback } from 'react';
import useSound from 'use-sound';

import switchSound from '~/assets/theme-switch.wav';

import { Container, Sun, Moon, Switch } from './styles';

const ToggleTheme: React.FC = ({ ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(switchSound);

  const handleChange = useCallback(() => {
    playSound({});
    setIsActive(!isActive);
  }, [playSound, isActive]);

  return (
    <Container {...rest}>
      <Sun isActive={!isActive} />

      <Switch
        checked={isActive}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={handleChange}
      />

      <Moon isActive={isActive} />
    </Container>
  );
};

export default ToggleTheme;
