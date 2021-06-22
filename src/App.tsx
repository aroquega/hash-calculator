/** @jsxImportSource @emotion/react */
import { Global, jsx, css } from '@emotion/react';
import React from 'react';
import Panel from './components/Panel'

function App() {
  return (
    <div>
      <Global styles={{
        '@font-face': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontDisplay: 'swap',
          src: 'url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format(\'woff2\')',
          unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
        },
        '*': {
          margin: 0,
          fontFamily: 'Roboto, sans-serif',
          boxSizing: 'border-box',
        },
        html: {
        backgroundColor: '#0b0f0e',
      }}}/>
      Hola mundo
      <Panel/>
    </div>
  );
}

export default App;
