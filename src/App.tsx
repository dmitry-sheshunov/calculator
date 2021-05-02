import React from 'react';
import { Calculator } from './modules/calculator/calculator';
import { RootLayOut } from './modules/layOut/root';

function App() {
  return (
    <RootLayOut>
      <Calculator/>
    </RootLayOut>
  );
}

export default App;
