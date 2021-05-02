import React from 'react';
import './display.css';
import { useSelector } from 'react-redux';
import { getCurrentDisplay, getIsOff, getSubDisplay } from '../../../../core/redux/calulater/selectors';

export const CalculatorDisplay: React.FC = () => {

  const display = useSelector(getCurrentDisplay);
  const subDisplay = useSelector(getSubDisplay);
  const isOff = useSelector(getIsOff)

  return (
    <div className='display'>
      <span className='sub-display'>
        { !isOff && subDisplay }
      </span>
      <span className='display-text'>
        { !isOff && display }
      </span>
    </div>
  );
}