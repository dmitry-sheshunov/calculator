import { useDispatch } from 'react-redux';
import { ArithmeticSign, ImmediateArithmetic, ITEM, Memory } from '../enums/calculator-button.enum';
import { arithmeticOperation, immediateArithmetic, memoryOperation, numberOperation, setQuiteState } from '../redux/calulater/actions';

export default () => {

  const dispatch = useDispatch()

  return {
    buttons: [
      {
        element: 'OFF',
        onClick: () => dispatch(setQuiteState(true)),
      },
      {
        element: '+/-',
        onClick: () => dispatch(immediateArithmetic(ImmediateArithmetic.MOD)),
      },
      {
        element: ImmediateArithmetic.ROOT,
        onClick: () => dispatch(immediateArithmetic(ImmediateArithmetic.ROOT))
      },
      {
        element: ImmediateArithmetic.PERCENT,
        onClick: () => dispatch(immediateArithmetic(ImmediateArithmetic.PERCENT))
      },
      {
        element: Memory.MRC,
        onClick: () => dispatch(memoryOperation(Memory.MRC))
      },
      {
        element: Memory.MEMORY_MINUS,
        onClick: () => dispatch(memoryOperation(Memory.MEMORY_MINUS))
      },
      {
        element: Memory.MEMORY_PLUS,
        onClick: () => dispatch(memoryOperation(Memory.MEMORY_PLUS))
      },
      {
        element: ArithmeticSign.DIVISION,
        onClick: () => dispatch(arithmeticOperation(ArithmeticSign.DIVISION))
      },
      {
        element: '7',
        onClick: () => dispatch(numberOperation('7'))
      },
      {
        element: '8',
        onClick: () => dispatch(numberOperation('8'))
      },
      {
        element: '9',
        onClick: () => dispatch(numberOperation('9'))
      },
      {
        element: ArithmeticSign.INCREASE,
        onClick: () => dispatch(arithmeticOperation(ArithmeticSign.INCREASE))
      },
      {
        element: '4',
        onClick: () => dispatch(numberOperation('4'))
      },
      {
        element: '5',
        onClick: () => dispatch(numberOperation('5'))
      },
      {
        element: '6',
        onClick: () => dispatch(numberOperation('6'))
      },
      {
        element: ArithmeticSign.MINUS,
        onClick: () => dispatch(arithmeticOperation(ArithmeticSign.MINUS))
      },
      {
        element: '1',
        onClick: () => dispatch(numberOperation('1'))
      },
      {
        element: '2',
        onClick: () => dispatch(numberOperation('2'))
      },
      {
        element: '3',
        onClick: () => dispatch(numberOperation('3')),
        type: ITEM.LAST
      },
      {
        element: ArithmeticSign.PLUS,
        onClick: () => dispatch(arithmeticOperation(ArithmeticSign.PLUS)),
        type: ITEM.CONCAT_PLUS
      },
      {
        element: '0',
        onClick: () => dispatch(numberOperation('0')),
      },
      {
        element: '.',
        onClick: () => dispatch(numberOperation('.')),
      },
      {
        element: ImmediateArithmetic.EXACTLY,
        onClick: () => dispatch(immediateArithmetic(ImmediateArithmetic.EXACTLY)),
      },
    ]
  }
};