import React from 'react';
import NextLayout from '../src/components/Layout';

import { NextPage } from 'next';

import HeroCard from '../src/components/HeroCard';

const GamePage: NextPage = () => {
  return (
    <NextLayout>
      <HeroCard />
    </NextLayout>
  );
};

export default GamePage;
