import React, { useState, useCallback, useContext } from 'react';
import useSound from 'use-sound';

import switchSound from '~/assets/theme-switch.wav';
import { ThemeContext } from '~/theme';

import { Container, Sun, Moon, Switch } from './styles';

const ToggleTheme: React.FC = ({ ...rest }) => {
  const [playSound] = useSound(switchSound);
  const { toggleTheme } = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false);

  const handleChange = useCallback(() => {
    playSound({});
    setIsActive(!isActive);
    toggleTheme();
  }, [playSound, isActive, toggleTheme]);

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
