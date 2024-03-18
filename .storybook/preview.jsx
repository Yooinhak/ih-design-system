import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../themes/index';
import { setConfig } from 'next/config';

setConfig({
  publicRuntimeConfig: {
    s3Host: 'http://localhost:6006',
  },
});

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  Story => {
    return (
      <ThemeProvider theme={theme('light')}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export default decorators;
