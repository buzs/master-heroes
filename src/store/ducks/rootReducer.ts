import { combineReducers } from 'redux';

import heroes from './heroes';
import score from './score';
import quiz from './quiz';
import leaderboard from './leaderboard';

export default combineReducers({
  heroes,
  score,
  quiz,
  leaderboard,
});
