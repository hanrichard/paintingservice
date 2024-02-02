import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	margin: 0 auto 50px;
	padding: 0 10px;
`;

export const Service = styled.div`
	display: flex;
	font-size: 16px;
	flex-direction: column;

	ul {
		padding-left: 20px;
	}

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		font-size: 22px;
	}

	img {
		@media only screen and (min-width: 768px) {
			width: 50%;
			padding-right: 40px;
		}
	}
`;
