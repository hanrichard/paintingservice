import styled from 'styled-components';

export const Header = styled.div`
	width: 100%;
	a {
		font-size: 24px;
		text-decoration: none;
		color: black;
	}
}`;

export const HeaderInner = styled.div`
	padding: 30px 10px;

	@media only screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const HeaderList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;

	li {
		margin-left: 20px;

		a {
			font-size: 16px;

			@media only screen and (min-width: 768px) {
			font-size: 18px;
			}
		}

		&:first-child {
			margin-left: 0;
		}
	}
`
export const Banner = styled.div`
	height: 200px;
	width: 100%;
	background-image: url("../../assets/house_painting2-1.jpg");
	background-size: cover;
	background-position: center;
	position: relative;

	@media only screen and (min-width: 768px) {
		height: 400px;
		font-size: 30px;
	}
	margin-bottom: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	font-size: 18px;

	h1 {
		padding: 10px;
		z-index: 1;
		text-align: center;
	}
`
export const BannerInner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0.6;
	z-index: 0;
	background-color: #000000;
`
