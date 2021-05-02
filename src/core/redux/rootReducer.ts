import { combineReducers } from 'redux';
import { CalculatorStateReducer } from './calulater/reducer';

export const rootReducer = combineReducers({
  calculator: CalculatorStateReducer
});

export type RootState = ReturnType<typeof rootReducer>