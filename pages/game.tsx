import React from 'react';
import NextLayout from '../src/components/Layout';

import {
	useSelector,
	useDispatch
} from 'react-redux';
import { ApplicationState } from 'src/store';
import { NextPage } from 'next';

import { loadRequest } from '../src/store/ducks/heroes/actions';

import HeroCard from '../src/components/HeroCard';

const GamePage: NextPage = () => {
	const heroes = useSelector(
		(state: ApplicationState) =>
			state.heroes.data
	);

	const dispatch = useDispatch();
	dispatch(loadRequest());
	return (
		<NextLayout>
			<HeroCard />
			<ul>
				{heroes.length}
				{/* {heroes.map(hero => (
					<li key={hero.id}>
						{hero.name}
					</li>
				))} */}
			</ul>
		</NextLayout>
	);
};

export default GamePage;
