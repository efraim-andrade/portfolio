import styled, { DefaultTheme } from 'styled-components';
import { lighten } from 'polished';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import { Moon as IconMoon, Sun as IconSun } from '@styled-icons/boxicons-solid';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Sun = styled(IconSun)<{ isActive: boolean }>`
  height: 28px;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
`;

export const Switch = styled(ReactSwitch).attrs(
  (props: ReactSwitchProps & { theme: DefaultTheme }) => ({
    ...props,
    width: 34,
    height: 20,
    handleDiameter: 12,
    onColor: props.theme.colors.text,
    onHandleColor: props.theme.colors.background,
    offColor: lighten(0.5, props.theme.colors.text),
    offHandleColor: props.theme.colors.background,
  })
)`
  margin: 0 0.8rem;
`;

export const Moon = styled(IconMoon)<{ isActive: boolean }>`
  height: 28px;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
`;
