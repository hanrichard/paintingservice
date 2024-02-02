import styled from 'styled-components';
import Modal from 'react-modal';

export const PortfolioVideos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: center;
`;


export const PortfolioVideo = styled.li`	
  position: relative;	
  width: 30%;
  padding-bottom: 54%;

  @media only screen and (min-width: 768px) {	
    width: 23%;
    padding-bottom: 42%;
  }

  @media only screen and (min-width: 1024px) {	
    width: 18%;
    padding-bottom: 32%;
  }
`;

export const PortfolioVideoOverLay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: grey;
  z-index: 1;
  opacity: 0.1;
`

export const PortfolioVideoInner = styled.div`
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
  }
`

export const ModalStyle = styled(Modal)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;

  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }

  margin: 0 auto;
`

export const ModalInner = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-bottom: 142%;
  position: relative;

  iframe {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ViewMore = styled.div`
	text-align: center;
	padding: 20px 30px;
	margin-top: 20px;
`;


export const Close = styled.button`
	text-align: center;
	padding: 20px 30px;
	margin-top: 50px;
`;


export const Container = styled.div`
	width: 100%;
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	margin: 0 auto 50px;
	padding: 0 10px;
`;
