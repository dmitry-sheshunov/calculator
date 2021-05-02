import React from 'react';
import './calculator.css';
import { CalculatorDisplay } from './components/display/display';
import { CalculatorToolBox } from './components/tool-box/tool-box';
export const Calculator: React.FC = () => {
  return (
      <div className='calculator'>
        <div className='calculator-tools'>
          <CalculatorDisplay/>
          <CalculatorToolBox/>
        </div>
      </div>
  );
}