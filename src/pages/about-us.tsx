import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import Lorem from '../components/helper-components/Lorem';

const AboutUs = () => {
  return (
    <div className='page about-us'>
      <Header activePageIndex={3} />
      <div className='page-content-wrapper'>
        <Lorem />
      </div>
    </div>
  );
};

export default observer(AboutUs);
