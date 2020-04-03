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
        font-size: 1.6rem;

        transition: 0.3s;
        border-bottom: 1px solid transparent;

        &:hover {
          border-bottom-color: ${({ theme }) =>
            lighten(0.4, theme.colors.text)};
        }
      }
    }
  }
`;
