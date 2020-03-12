import React, { Component } from 'react';
import { Button } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card } from './styles';

class HeroCard extends Component {
	render() {
		return (
			<Card>
				<img
					src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg"
					alt=""
				/>
				<div className="nameOptions">
					<Button type="dashed" block>
						Nome 1
					</Button>
					<Button type="dashed" block>
						Nome 2
					</Button>
					<Button type="dashed" block>
						Nome 3
					</Button>
				</div>
			</Card>
		);
	}
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(HeroCard);

export default HeroCard;
