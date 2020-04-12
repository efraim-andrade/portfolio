import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  right: -2rem;
  bottom: -24rem;
  /* bottom: -10.4rem; */

  width: 19.8rem;
  height: 25.4rem;

  > svg {
    height: 100%;
    width: 100%;
  }
`;
