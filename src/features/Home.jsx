import React from 'react';

import { Videos } from '../components/videos/Videos';
import { Gallery } from '../components/gallery/Gallery';
import { About } from '../components/about/About';
import { Service } from '../components/service/Service';

export const Home = () => {
  return (
    <main>
      <Service />
      <About />
      <Videos isFeature/>
      <Gallery isFeature/>
    </main>
  );
};
