import { Reducer } from 'redux';
import { QuizState, QuizTypes } from './types';

const INITIAL_STATE: QuizState = {
  amountQuestions: 10,
  currentAmountQuestion: 0,
};

const reducer: Reducer<QuizState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizTypes.SET_AMOUNT_QUESTIONS:
      return {
        ...state,
        amountQuestions: action.amount,
      };
    case QuizTypes.UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        currentAmountQuestion: state.currentAmountQuestion + 1,
      };
    default:
      return state;
  }
};

export default reducer;
