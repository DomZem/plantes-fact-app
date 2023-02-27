import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	height: 80px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 2rem;
	border-bottom: 1px solid rgba(151, 151, 151, 0.35);

	background-color: transparent;

	z-index: 900;
`;

export const Title = styled.h1`
	font-size: 2.8rem;
	text-transform: uppercase;
`;
