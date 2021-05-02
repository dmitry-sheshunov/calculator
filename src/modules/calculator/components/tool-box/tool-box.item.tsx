import React from 'react';
import './tool-box.css';

interface CalculatorToolBoxItemProps {
  element: string,
  onClick(): void
  type?: string
}

export const CalculatorToolBoxItem: React.FC<CalculatorToolBoxItemProps> = ({ onClick, element, type }) => {

  return (
      <div className={ `tool-box-item ${ type ? type : '' }` } onClick={onClick}>
        { element }
      </div>
  );
}