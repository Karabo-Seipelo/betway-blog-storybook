import React from 'react';
import { GlobalStyle } from '../src/shared/global';
import 'bootstrap/dist/css/bootstrap.min.css';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    element: '#root',
    manual: false,
  },
}