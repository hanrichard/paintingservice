import React from 'react';

import { Link } from 'react-router-dom';
import * as Styles from './Gallery.styles';

export const Gallery = ({isFeature}) => {
  const [addImageModalOpen, setImageAddModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(undefined);

  const handleImageAddClick = (id) => {
    setImageAddModalOpen(true);
    setSelectedImage(id)
  };
  const handleImageClose = () => {
    setImageAddModalOpen(false);
    setSelectedImage('')
  };

  const images = [...Array(31).keys()]
  const all = images.map(i => {
    return <Styles.Image key={i}><img src={require('../../assets/gallery/' + i + '.jpg')} onClick={
      () => handleImageAddClick(<img src={require('../../assets/gallery/' + i +'.jpg')} />)} /></Styles.Image>
  })

  return (
    <Styles.Container>
      <Styles.ContainerInner>
        <h2 id="gallery">Gallery</h2>
        <Styles.ImageList>
          {all.slice(0, 6)}
          {!isFeature && all}
        </Styles.ImageList>

        {isFeature ? <Styles.ViewMore><Link to="/gallery">View More</Link></Styles.ViewMore>: <Styles.ViewMore><Link to="/">Back</Link></Styles.ViewMore>}

        <Styles.ModalStyle
          isOpen={addImageModalOpen}
          contentLabel="onRequestClose Example"
          onRequestClose={handleImageClose}
          overlayClassName="Overlay"
        >
          <Styles.ModalInner >
            {selectedImage}
          </Styles.ModalInner>
          <Styles.Close onClick={handleImageClose}>Close</Styles.Close>
        </Styles.ModalStyle>
      </Styles.ContainerInner>
    </Styles.Container>
  )
}