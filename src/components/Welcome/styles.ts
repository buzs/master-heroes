import styled from 'styled-components';

export const Card = styled.div`
	min-width: 380px;
	padding: 30px 20px;
	border-radius: 2px;
	display: flex;
	flex-direction: column;

	background: rgba(255, 255, 255, 0.5);
	border-radius: 4px;

	.sub {
		text-align: center;
		font-size: 10px;
		margin-bottom: 20px;
	}

	h2 {
		font-weight: 900;
		font-family: 'Lato', sans-serif;
		font-size: 32px;
		margin: 0;
	}

	.info-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;

		span {
			vertical-align: middle;
		}
	}

	.desc {
		text-align: right;
		max-width: 320px;
		margin-bottom: 30px;
	}

	.anticon {
		font-size: 18px;
	}

	button {
		background-color: #27ae60;
		border-color: #27ae60;
	}

	button:hover,
	button:focus {
		background-color: #3ebd74;
		border-color: #3ebd74;
	}
`;
