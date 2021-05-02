import React from 'react';
import toolBoxList from '../../../../core/static/calculator-items';
import { CalculatorToolBoxItem } from './tool-box.item';

export const CalculatorToolBox: React.FC = () => {
  return (
      <div className='tool-box-items'>
        { toolBoxList().buttons.map((item) => (
          <CalculatorToolBoxItem
            key={item.element}
            element={item.element}
            onClick={item.onClick}
            type={item.type}
          />)) }
      </div>
  );
}