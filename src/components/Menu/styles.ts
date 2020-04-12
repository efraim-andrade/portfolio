import styled from 'styled-components';
import { lighten } from 'polished';
import { motion, HTMLMotionProps, ForwardRefComponent } from 'framer-motion';

export const Container = styled(motion.div).attrs(
  (props: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>) => props
)`
  margin-top: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > ul {
    display: flex;

    > li {
      & + li {
        margin-left: 4rem;
      }

      > a {
        border-bottom: 1px solid transparent;

        font-size: 1.6rem;
        letter-spacing: 0.25rem;
        transition: 0.3s;

        &:hover {
          border-bottom-color: ${({ theme }) =>
            lighten(0.4, theme.colors.text)};
        }
      }
    }
  }
`;
