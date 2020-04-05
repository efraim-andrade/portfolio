import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 140rem;

  ${media.lessThan('huge')`
    max-width: 117rem;
  `}
`;
