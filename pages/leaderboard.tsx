import React from 'react';
import NextLayout from '../src/components/Layout';

import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { getLeadersRequest } from '../src/store/ducks/leaderboard/actions';

import Leaderboard from '../src/components/Leaderboard';

const GamePage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(getLeadersRequest());
  return (
    <NextLayout>
      <Leaderboard />
    </NextLayout>
  );
};

export default GamePage;
