import { toast } from 'react-toastify';
import { ArithmeticSign, ImmediateArithmetic, Memory } from '../../../enums/calculator-button.enum';
import {
  ARITHMETIC_OPERATION,
  CalculatorActionTypes,
  CalculatorState,
  IMMEDIATE_ARITHMETIC,
  MEMORY_OPERATION,
  NUM_OPERATION,
  QUITE,
} from '../actions';

const initialState: CalculatorState = {
  isOff: false,
  currentDisplay: '0',
  subDisplay: '',
  wasCalculated: false,
  memory: '',
};

export const CalculatorStateReducer = (state = initialState, action: CalculatorActionTypes): CalculatorState => {

  switch (action.type) {
    case NUM_OPERATION:
      if ((state.currentDisplay === '0' && action.num !== '.') || state.wasCalculated) {
        return { ...state, currentDisplay: action.num, wasCalculated: false }
      }
      if (state.currentDisplay.length < 10 && (!state.currentDisplay.includes('.') || action.num !== '.')) {
        return { ...state, currentDisplay: state.currentDisplay + action.num };
      }
      return state;
    case QUITE :
      return { ...state, currentDisplay: '0', subDisplay: '' }
    case ARITHMETIC_OPERATION:
      if (state.currentDisplay.slice(-1) === '.') {
        toast.warn('display cant end with .')
        return state
      }
      if (state.subDisplay) {
        const leftOperationNumber = Number(state.subDisplay.slice(0, -1))
        const rightOperationNumber = Number(state.currentDisplay);
        const currentOperationSubDisplay = state.subDisplay.slice(-1)
        switch (currentOperationSubDisplay) {
          case ArithmeticSign.PLUS:
            return { ...state, subDisplay: `${(leftOperationNumber + rightOperationNumber).toString()}${action.operation}`, currentDisplay: '0' }
          case ArithmeticSign.MINUS:
            return { ...state, subDisplay: `${(leftOperationNumber - rightOperationNumber).toString()}${action.operation}`, currentDisplay: '0' }
          case ArithmeticSign.INCREASE:
            return { ...state, subDisplay: `${(leftOperationNumber * rightOperationNumber).toString()}${action.operation}`, currentDisplay: '0' }
          case ArithmeticSign.DIVISION:
            if (state.currentDisplay === '0') {
              toast.warn('you cant do division by 0')
              return state
            }
            return { ...state, subDisplay: `${(leftOperationNumber / rightOperationNumber).toString()}${action.operation}`, currentDisplay: '0' }
          default: return state
        }
      }
      return { ...state, subDisplay: `${state.currentDisplay}${action.operation}`, currentDisplay: '0' }
    case IMMEDIATE_ARITHMETIC:
      switch (action.operation) {
        case ImmediateArithmetic.MOD:
          if (state.currentDisplay === '0') {
            toast.warn('0 cant be negative')
            return state;
          }
          const sign = state.currentDisplay.includes('-');
          return { ...state, currentDisplay: sign ? state.currentDisplay.slice(1) : `-${state.currentDisplay}` }
        case ImmediateArithmetic.EXACTLY:
          if (!state.subDisplay) {
            toast.warn('pls do some operation')
            return state
          }
          return { ...state, subDisplay: '', currentDisplay: eval(`${state.subDisplay}${state.currentDisplay}`).toString(), wasCalculated: true }
        case ImmediateArithmetic.PERCENT:
          const operationNumber = Number(state.currentDisplay);
          return { ...state, currentDisplay: (operationNumber / 100).toString() }
        case ImmediateArithmetic.ROOT:
          const currentNumber = Number(state.currentDisplay);
          if (currentNumber < 0) {
            toast.warn('cant do sqrt with negative numbers')
            return state
          }
            return { ...state, currentDisplay: (Math.sqrt(currentNumber)).toString() }
        default: return state
      }
    case MEMORY_OPERATION:
      switch(action.operation) {
        case Memory.MEMORY_PLUS:
          if (state.currentDisplay.slice(-1) === '.') {
            toast.warn('display cant end with .')
            return state
          }
          if (!state.currentDisplay.length) {
            toast.warn('no save memory')
            return state
          }
          toast.success(`${state.currentDisplay} was added to memory`)
          return { ...state, memory: state.currentDisplay }
        case Memory.MEMORY_MINUS:
          toast.success('memory was cleaned')
          return { ...state, memory: '' }
        case Memory.MRC:
          if (!state.memory.length) {
            toast.warn('no read memory')
            return state
          }
          toast.success('memory was read')
          return { ...state, currentDisplay: state.memory }
        default: return state
      }
    default:
      return state;
  }
};