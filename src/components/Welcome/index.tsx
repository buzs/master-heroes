import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import { Card } from './styles';

const { Title, Text, Paragraph } = Typography;

export default class Welcome extends Component {
	render() {
		return (
			<Card>
				<Title level={2}>
					Welcome to Master Hero
				</Title>
				<Text className="sub">
					this game will test if you
					really know heroes
				</Text>

				<Text className="desc">
					the game consists of you
					selecting the right hero name
					from the image
				</Text>

				<div className="info-list">
					<Text>
						<CheckCircleOutlined />{' '}
						there will be 10 questions
					</Text>
					<Text>
						<CheckCircleOutlined />{' '}
						each hit counts 20 points
					</Text>
				</div>

				<Button type="primary">
					Start Challenge
				</Button>
			</Card>
		);
	}
}
