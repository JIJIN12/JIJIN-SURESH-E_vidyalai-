import React from 'react';
import { WindowWidthProvider } from '../contextAPI/WidthContext';

const App = ({ Component, pageProps }) => (
  <WindowWidthProvider>
  <Component {...pageProps} />
</WindowWidthProvider>
);

export default App;
