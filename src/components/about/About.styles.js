import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	margin: 0 auto 50px;
	padding: 0 10px;
`;

export const About = styled.div`
	display: flex;
	font-size: 16px;
	flex-direction: column;

	@media only screen and (min-width: 768px) {
		font-size: 22px;
		flex-direction: row;
	}

	.aboutContainerContent {
		display: flex;
		order: 2;
		flex-direction: column;

		@media only screen and (min-width: 768px) {
			order: 1;
		}
	}

	p {
		padding-right: 20px;
	}

	img {
		display: flex;
		order: 1;

		@media only screen and (min-width: 768px) {
			width: 50%;
			padding-right: 40px;
			order: 2;
		}
	}
`;
