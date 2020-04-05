import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
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
