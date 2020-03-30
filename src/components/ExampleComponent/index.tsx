import React from 'react';

import Me from '~/assets/thats-me.svg';

import { Container, ThatsMe, Message } from './styles';

interface Props {
  title: string;
  color?: string;
}

export default function ExampleComponent({ title, color }: Props) {
  return (
    <Container color={color}>
      <h1>
        {title}
        <span>(testando a API)</span>
      </h1>

      <p>O projeto vem com uma série de padrões pré definidos com:</p>

      <ul>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          Prettier
        </li>

        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          Eslint no padrão{' '}
          <a href="https://www.npmjs.com/package/eslint-config-airbnb">
            Airbnb
          </a>
        </li>

        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          Stylelint no padrão{' '}
          <a href="https://github.com/necolas/idiomatic-css">Idiomatic CSS</a>
        </li>
      </ul>

      <p>E com as seguintes ferramentas:</p>

      <ul>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          <a href="https://styled-components.com/">Styled Components</a> para
          CSS e temas
        </li>

        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          <a href="https://storybook.js.org/">Storybook</a> para documentação de
          componentes.
        </li>

        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          <a href="https://testing-library.com/docs/react-testing-library/intro">
            Testing Library +
          </a>{' '}
          <a href="https://jestjs.io/">Jest</a> para testes automatizados
        </li>

        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          <a href="https://github.com/gaearon/react-hot-loader">
            react-hot-loader
          </a>{' '}
          para ter o modulo de Hot loader (não dar reload na página a cada CTRL
          + S)
        </li>

        <li>
          <span role="img" aria-label="check">
            ✅
          </span>{' '}
          <a href="https://github.com/gsoft-inc/craco">craco</a> para poder ter
          os caminhos absolutos a partir da pasta src, ex: ~/components
        </li>
      </ul>

      <Message
        animate={{ y: -100, opacity: 0.5 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        iae dev!
      </Message>

      <ThatsMe
        src={Me}
        animate={{ y: -180 }}
        transition={{
          duration: 2,
          ease: 'easeOut',
        }}
      />
    </Container>
  );
}
