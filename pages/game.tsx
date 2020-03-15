import React from 'react';
import NextLayout from '../src/components/Layout';

import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { loadRequest } from '../src/store/ducks/heroes/actions';

import HeroCard from '../src/components/HeroCard';

const GamePage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(loadRequest());
  return (
    <NextLayout>
      <HeroCard />
    </NextLayout>
  );
};

export default GamePage;
