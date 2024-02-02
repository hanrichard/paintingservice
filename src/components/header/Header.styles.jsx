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

export const headerList = styled.ul`
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
	height: 300px;
	width: 100%;
	background-image: url("../../assets/house_painting2-1.jpg");
	background-size: cover;
	background-position: center;

	@media only screen and (min-width: 768px) {
		height: 500px;
	}
	margin-bottom: 50px;
`
