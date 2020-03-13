import React from 'react';
import NextLayout from '../src/components/Layout';

import { NextPage } from 'next';

import Welcome from '../src/components/Welcome';

const IndexPage: NextPage = () => {
	return (
		<NextLayout>
			<Welcome />
		</NextLayout>
	);
};

export default IndexPage;
