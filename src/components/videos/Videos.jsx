import React from 'react';

import { Link } from 'react-router-dom';
import * as Styles from './Videos.styles';

export const Videos = ({isFeature}) => {
  const [addModalOpen, setAddModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  const handleAddClick = (id) => {
    setAddModalOpen(true);
    setSelected(id)
  };
  const handleClose = () => {
    setAddModalOpen(false);
    setSelected('')
  };
  const displayFeature =  <>
  <Styles.PortfolioVideo>
    <Styles.PortfolioVideoInner>
      <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/y_Z3gHGM4r8")}></Styles.PortfolioVideoOverLay>
      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/y_Z3gHGM4r8" title="12" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Styles.PortfolioVideoInner>
  </Styles.PortfolioVideo>
  <Styles.PortfolioVideo>
    <Styles.PortfolioVideoInner>
      <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/jUKoTojFfQc")}></Styles.PortfolioVideoOverLay>
      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/jUKoTojFfQc" title="9" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Styles.PortfolioVideoInner>
  </Styles.PortfolioVideo>
  <Styles.PortfolioVideo>
    <Styles.PortfolioVideoInner>
      <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/nfWpIxts5Xo")}></Styles.PortfolioVideoOverLay>
      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/nfWpIxts5Xo" title="10" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Styles.PortfolioVideoInner>
  </Styles.PortfolioVideo>
  <Styles.PortfolioVideo>
    <Styles.PortfolioVideoInner>
      <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/NSj6ZOi4wfc")}></Styles.PortfolioVideoOverLay>
      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/NSj6ZOi4wfc" title="11" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Styles.PortfolioVideoInner>
  </Styles.PortfolioVideo>
  <Styles.PortfolioVideo>
    <Styles.PortfolioVideoInner>
      <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/Fyt-9ZeolbM")}></Styles.PortfolioVideoOverLay>
      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Fyt-9ZeolbM" title="18" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Styles.PortfolioVideoInner>
  </Styles.PortfolioVideo>
  </>

const displayRest =  <> 
    <Styles.PortfolioVideo>
      <Styles.PortfolioVideoInner>
        <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/nutRCl9BfmQ")}></Styles.PortfolioVideoOverLay>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/nutRCl9BfmQ" title="13" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Styles.PortfolioVideoInner>
    </Styles.PortfolioVideo>
    <Styles.PortfolioVideo>
      <Styles.PortfolioVideoInner>
        <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/SmQwEiwOKZE")}></Styles.PortfolioVideoOverLay>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/SmQwEiwOKZE" title="14" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Styles.PortfolioVideoInner>
    </Styles.PortfolioVideo>
    <Styles.PortfolioVideo>
      <Styles.PortfolioVideoInner>
        <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/J4z7-vST0wk")}></Styles.PortfolioVideoOverLay>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/J4z7-vST0wk" title="15" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Styles.PortfolioVideoInner>
    </Styles.PortfolioVideo>
    <Styles.PortfolioVideo>
      <Styles.PortfolioVideoInner>
        <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/L6mcWJqIC-Y")}></Styles.PortfolioVideoOverLay>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/L6mcWJqIC-Y" title="16" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Styles.PortfolioVideoInner>
    </Styles.PortfolioVideo>
    <Styles.PortfolioVideo>
      <Styles.PortfolioVideoInner>
        <Styles.PortfolioVideoOverLay onClick={() => handleAddClick("https://www.youtube.com/embed/iE0Bd2NSP9w")}></Styles.PortfolioVideoOverLay>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/iE0Bd2NSP9w" title="19" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Styles.PortfolioVideoInner>
    </Styles.PortfolioVideo>
    </>

  return ( 
    <Styles.Container>
      <Styles.ContainerInner>
        <h2 id="portfolios">Portfolios</h2>
        <Styles.PortfolioVideos>
          {displayFeature}
          {!isFeature && displayRest}
        </Styles.PortfolioVideos>

        {isFeature ? <Styles.ViewMore><Link to="/videos">View More</Link></Styles.ViewMore>: <Styles.ViewMore><Link to="/">Back</Link></Styles.ViewMore>}

        <Styles.ModalStyle
          isOpen={addModalOpen}
          contentLabel="onRequestClose Example"
          onRequestClose={handleClose}
          overlayClassName="Overlay"
        >
          <Styles.ModalInner >
            <iframe width="100%" height="auto" src={selected + "?autoplay=1&controls=1&loop=1&mute=1"} title="video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Styles.ModalInner>
          <Styles.Close onClick={handleClose}>X</Styles.Close>
        </Styles.ModalStyle>
      </Styles.ContainerInner>
    </Styles.Container>
  )
};
