import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .presentation {
    margin-top: -8rem;

    h1 {
      margin-bottom: 2.4rem;

      font-weight: 600;
      font-size: 4.8rem;
      line-height: 1;
    }

    h2 {
      margin-bottom: 6rem;

      line-height: 1;
      font-weight: 400;
      font-size: 3.2rem;
    }

    .mail-me {
      height: 5rem;
      padding: 0 3.2rem;
      border: transparent;
      border-radius: 6px;
      box-shadow: 0 4px 10px ${({ theme }) => lighten(0.4, theme.colors.text)};

      display: inline-block;

      font-size: 2.4rem;
      line-height: 5rem;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.danger};

      font-weight: 700;
      transition: 0.3s;

      &:hover {
        transform: translate(2px, -2px);

        box-shadow: -2px 8px 12px
          ${({ theme }) => lighten(0.38, theme.colors.text)};
      }
    }
  }
`;
