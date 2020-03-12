import styled from 'styled-components';

export const Card = styled.div`
	background: #fff;
	max-width: 380px;
	padding: 30px 20px;
	border-radius: 2px;
	display: flex;

	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
	border-radius: 4px;

	img {
		max-width: 160px;
		margin-right: 20px;
	}

	.nameOptions {
		min-width: 160px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;
