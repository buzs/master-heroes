import React, { Component } from 'react';
import { Layout, Typography } from 'antd';

import 'antd/dist/antd.css';
import './global.css';

import Welcome from './components/Welcome';
import HeroCard from './components/HeroCard';

const { Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout
				style={{
					height: '100%',
					background: '#3B4046'
				}}
				className="layout"
			>
				<Content
					style={{
						padding: '0 50px',
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<Typography.Title
						level={1}
						style={{
							textAlign: 'center',
							color: '#CCC'
						}}
					>
						What is the superhero
						name?
					</Typography.Title>
					<HeroCard />
				</Content>
				<Footer
					style={{
						textAlign: 'center',
						fontSize: '10px',
						background: '#3B4046',
						color: '#ccc'
					}}
				>
					using superheros-api made in
					brazil
				</Footer>
			</Layout>
		);
	}

export default App;
