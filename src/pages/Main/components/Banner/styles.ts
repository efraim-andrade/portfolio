import styled from 'styled-components';
import { lighten, darken } from 'polished';
import media from 'styled-media-query';

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .presentation {
    margin-top: -4rem;

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
      border-radius: 0.6rem;
      box-shadow: 0 4px 10px ${({ theme }) => lighten(0.4, theme.colors.text)};

      display: inline-block;

      font-size: 2.4rem;
      line-height: 5rem;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.danger};

      font-weight: 700;
      transition: 0.3s;

      &:hover {
        transform: translateY(-2px);

        box-shadow: -2px 8px 12px
          ${({ theme }) => lighten(0.4, theme.colors.text)};

        background: ${({ theme }) => darken(0.05, theme.colors.danger)};
      }
    }
  }

  footer {
    position: relative;

    margin-bottom: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > .socials {
      width: 19rem;

      > .link {
        margin-left: 0.8rem;

        > svg {
          height: 28px;

          transition: 0.3s;

          &:hover {
            fill: ${({ theme }) => darken(0.2, theme.colors.text)};
          }
        }
      }
    }

    .anchor-down {
      position: absolute;
      top: 0;
      left: 50%;

      transform: translateX(-50%);

      > svg {
        height: 4rem;

        transition: 0.3s;

        &:hover {
          transform: translateY(10px);

          fill: ${({ theme }) => darken(0.2, theme.colors.text)};
        }
      }
    }

    > .toggle {
      width: 19rem;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      ${media.lessThan('huge')`
        margin-right: 12rem;
      `}
    }
  }
`;
