import { Reducer } from 'redux';
import { QuizState, QuizTypes } from './types';

const INITIAL_STATE: QuizState = {
  questions: [],
  amountQuestions: 10,
  currentAmountQuestion: 0,
  currentQuestion: undefined,
};

const reducer: Reducer<QuizState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizTypes.GENERATE_QUESTIONS:
      return {
        ...state,
      };
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
    case QuizTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload.data,
      };
    case QuizTypes.RESET_GAME:
      return {
        ...state,
        currentAmountQuestion: 0,
        questions: [],
      };
    default:
      return state;
  }
};

export default reducer;
