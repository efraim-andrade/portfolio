import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;

      success: string;
      danger: string;
      warning: string;
    };
  }
}
