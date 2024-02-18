import styled from "styled-components";
import Modal from "react-modal";

export const ImageList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 10px;

	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const Image = styled.div`
	img {
		flex: 1;
		display: block;
		width: 100%;
		height: auto;
	}
`;

export const ModalStyle = styled(Modal)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 400px;

	@media only screen and (min-width: 768px) {
		max-width: 800px;
	}

	margin: 0 auto;
`;

export const ModalInner = styled.div`
	margin: 0 auto;

	img {
		width: 100%;
		margin-top: 20px;
	}
`;

export const ViewMore = styled.div`
	text-align: center;
	padding: 20px 30px;
	margin-top: 20px;
	a {
		font-size: 16px;
		color: #000000;
		font-weight: bold;
	}
`;

export const Close = styled.button`
	text-align: center;
	padding: 20px;
	position: absolute;
	right: -20px;
	top: 0;
	cursor: pointer;
	font-size: 16px;
`;

export const Container = styled.div`
	width: 100%;
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	margin: 0 auto 50px;
	padding: 0 10px;
`;
