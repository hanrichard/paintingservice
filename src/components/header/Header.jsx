import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import * as Styles from './Header.styles';
import Img from  '../../assets/house_painting2-1.jpg';

export const Header = () => {
  return (
    <>
      <Styles.Header>
        <Styles.HeaderInner>
          <Link to="/"><b>SYDNEY PAINTING SERVICE</b></Link>
          <nav>
          <Styles.HeaderList>
              <li><HashLink to="/#services">Services</HashLink></li>
              <li><HashLink to="/#about">About</HashLink></li>
              <li><HashLink to="/#portfolios">Portfolios</HashLink></li>
              <li><HashLink to="/#gallery">Gallery</HashLink></li>
              <li><HashLink to="/#contact">Contact</HashLink></li>
            </Styles.HeaderList>
          </nav>
        </Styles.HeaderInner>
    </Styles.Header >
    <Styles.Banner 
     style={{backgroundImage: `url(${Img})` , backgroundColor: '#cccccc'}}/>
  </>
)};
