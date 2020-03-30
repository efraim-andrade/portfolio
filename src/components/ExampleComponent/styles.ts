import styled from 'styled-components';
import { motion, MotionProps } from 'framer-motion';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${({ color, theme }) => color || theme.colors.background};

  > h1 {
    margin-bottom: 24px;

    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.text};

    > span {
      margin-left: 1.6rem;

      color: #ccc;
      font-size: 3.2rem;
      text-decoration: line-through;
    }
  }

  > p {
    margin-bottom: 16px;

    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors};
  }

  > ul {
    margin-bottom: 24px;
    width: 500px;

    li {
      margin-bottom: 8px;

      font-size: 1.6rem;
      line-height: 1.5;

      > a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.text};

        &:visited {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`;

export const Message = styled(motion.span)`
  position: absolute;
  bottom: 0;
  right: 200px;

  opacity: 0;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThatsMe = styled(motion.img).attrs((props: MotionProps) => props)`
  position: fixed;
  right: -5rem;
  bottom: -25rem;

  width: 25rem;
  height: 25rem;
  border-radius: 30px;
`;
