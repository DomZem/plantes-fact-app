import { css } from 'styled-components';

export const openFirstLine = css`
	transform: translateY(235%) rotate(45deg);
`;

export const closeFirstLine = css`
	transform: none;
`;

export const hideSecondLine = css`
	opacity: 0;
`;

export const showSecondLine = css`
	opacity: 1;
`;

export const openThirdLine = css`
	transform: translateY(-235%) rotate(-45deg);
`;

export const closeThirdLine = css`
	transform: none;
`;
