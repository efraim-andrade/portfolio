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

  @media screen and (max-width: 1200px) {
    margin: 0 auto 4rem;

    justify-content: center;
  }

  > ul {
    display: flex;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }

    > li {
      @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: center;
      }

      & + li {
        margin-left: 4rem;

        @media screen and (max-width: 1200px) {
          margin-left: 0;
          margin-top: 1.6rem;
        }
      }

      > a {
        border-bottom: 1px solid transparent;

        font-size: 1.6rem;
        letter-spacing: 0.25rem;
        transition: 0.3s;

        @media screen and (max-width: 1200px) {
          text-align: center;
        }

        &:hover {
          border-bottom-color: ${({ theme }) =>
            lighten(0.4, theme.colors.text)};
        }
      }
    }
  }
`;
