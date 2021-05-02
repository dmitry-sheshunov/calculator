import { RootState } from '../../rootReducer';
import { CalculatorState } from '../actions';

const getCalculatorState = (state: RootState): CalculatorState => state.calculator;

export const getCurrentDisplay = (state: RootState) => getCalculatorState(state)?.currentDisplay;
export const getSubDisplay = (state: RootState) => getCalculatorState(state)?.subDisplay;
export const getIsOff = (state: RootState) => getCalculatorState(state)?.isOff;