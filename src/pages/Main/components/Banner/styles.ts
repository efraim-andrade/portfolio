import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    padding-top: 4rem;

    flex-direction: column-reverse;
  }

  .presentation {
    margin-top: -4rem;

    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }

    h1 {
      margin-bottom: 2.4rem;

      font-weight: 600;
      font-size: 4.8rem;
      line-height: 1;

      @media screen and (max-width: 1200px) {
        margin-bottom: 1.6rem;

        font-size: 2.4rem;
        text-align: center;
      }
    }

    h2 {
      margin-bottom: 6rem;

      line-height: 1;
      font-weight: 400;
      font-size: 3.2rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.6rem;
        text-align: center;
      }
    }

    .mail-me {
      height: 5rem;
      padding: 0 3.2rem;
      border: transparent;
      border-radius: 0.6rem;
      box-shadow: 0 4px 10px
        ${({ theme }) =>
          theme.title === 'light'
            ? lighten(0.4, theme.colors.text)
            : lighten(0.1, theme.colors.background)};

      display: inline-block;

      font-weight: 700;
      transition: 0.3s;
      font-size: 2.4rem;
      line-height: 5rem;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.danger};

      @media screen and (max-width: 1200px) {
        height: 4rem;
        width: 180px;
        margin: 0 auto;

        font-size: 1.6rem;
        line-height: 4rem;
        text-align: center;
      }

      &:hover {
        transform: translateY(-2px);

        box-shadow: -2px 8px 12px
          ${({ theme }) =>
            theme.title === 'light'
              ? lighten(0.4, theme.colors.text)
              : lighten(0.1, theme.colors.background)};

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

    @media screen and (max-width: 1200px) {
      height: auto;

      justify-content: center;
      flex-direction: column-reverse;
    }

    > .socials {
      width: 19rem;

      @media screen and (max-width: 1200px) {
        margin-top: 6rem;
      }

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

      @media screen and (max-width: 1200px) {
        display: none;
      }

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
      z-index: 10;

      width: 19rem;
      margin-right: 11.6rem;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 1200px) {
        margin-right: 0;

        justify-content: center;
      }
    }
  }
`;
