import React from 'react';
import NextLayout from '../src/components/Layout';

import { NextPage } from 'next';

import { useDispatch } from 'react-redux';
import { loadRequest } from '../src/store/ducks/heroes/actions';

import Welcome from '../src/components/Welcome';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(loadRequest());
  return (
    <NextLayout>
      <Welcome />
    </NextLayout>
  );
};

export default IndexPage;
